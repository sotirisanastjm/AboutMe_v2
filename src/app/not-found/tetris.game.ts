import { TETRIS_PIECES, TetrisPiece, TetrisTheme, THEME_DARK, THEME_LIGHT, rotateCW, pieceColor } from './tetris-pieces';

export interface TetrisCallbacks {
    onScoreUpdate: (score: number) => void;
    onGameOver: (finalScore: number) => void;
}

export class TetrisGame {
    private ctx: CanvasRenderingContext2D;
    private w = 0;
    private h = 0;
    private cell = 0;
    private ox = 0;
    private oy = 0;
    private readonly COLS = 10;
    private readonly ROWS = 20;
    private board: string[][] = [];
    private piece: { shape: number[][]; color: string; x: number; y: number } | null = null;
    private next: TetrisPiece | null = null;
    private score = 0;
    private lines = 0;
    private level = 1;
    private running = false;
    private frameId = 0;
    private lastDrop = 0;
    private dropMs = 800;
    private readonly LINE_PTS = [0, 100, 300, 500, 800];
    private isDark: boolean;
    private theme: TetrisTheme;

    constructor(
        private readonly canvas: HTMLCanvasElement,
        private readonly cb: TetrisCallbacks,
        isDark = true
    ) {
        this.ctx = canvas.getContext('2d')!;
        this.isDark = isDark;
        this.theme = isDark ? THEME_DARK : THEME_LIGHT;
    }

    start(): void {
        this.setupCanvas();
        this.board = Array.from({ length: this.ROWS }, () => Array(this.COLS).fill(''));
        this.score = 0;
        this.lines = 0;
        this.level = 1;
        this.dropMs = 800;
        this.next = this.rand();
        this.spawn();
        this.running = true;
        this.lastDrop = performance.now();
        this.tick();
    }

    stop(): void {
        this.running = false;
        cancelAnimationFrame(this.frameId);
    }

    destroy(): void { this.stop(); }

    handleKey(code: string): void {
        if (!this.running || !this.piece) return;
        if (code === 'ArrowLeft') this.move(-1, 0);
        else if (code === 'ArrowRight') this.move(1, 0);
        else if (code === 'ArrowDown') this.move(0, 1);
        else if (code === 'ArrowUp') this.rotate();
        else if (code === 'Space') this.hardDrop();
    }

    private setupCanvas(): void {
        const dpr = window.devicePixelRatio || 1;
        const r = this.canvas.getBoundingClientRect();
        this.w = r.width;
        this.h = r.height;
        this.canvas.width = r.width * dpr;
        this.canvas.height = r.height * dpr;
        this.ctx.scale(dpr, dpr);
        this.cell = Math.floor(Math.min(this.w / 14, (this.h - 20) / this.ROWS));
        const boardW = this.COLS * this.cell;
        this.ox = Math.floor((this.w - boardW) * 0.38);
        this.oy = Math.floor((this.h - this.ROWS * this.cell) / 2);
    }

    private rand(): TetrisPiece {
        return TETRIS_PIECES[Math.floor(Math.random() * TETRIS_PIECES.length)];
    }

    private spawn(): void {
        const p = this.next!;
        this.next = this.rand();
        const x = Math.floor((this.COLS - p.shape[0].length) / 2);
        this.piece = { shape: p.shape, color: pieceColor(p, this.isDark), x, y: 0 };
        if (this.hits(this.piece.shape, x, 0)) {
            this.running = false;
            cancelAnimationFrame(this.frameId);
            this.cb.onGameOver(this.score);
        }
    }

    private hits(s: number[][], px: number, py: number): boolean {
        for (let r = 0; r < s.length; r++)
            for (let c = 0; c < s[r].length; c++) {
                if (!s[r][c]) continue;
                const bx = px + c, by = py + r;
                if (bx < 0 || bx >= this.COLS || by >= this.ROWS) return true;
                if (by >= 0 && this.board[by][bx]) return true;
            }
        return false;
    }

    private move(dx: number, dy: number): boolean {
        if (!this.piece) return false;
        if (!this.hits(this.piece.shape, this.piece.x + dx, this.piece.y + dy)) {
            this.piece.x += dx;
            this.piece.y += dy;
            return true;
        }
        return false;
    }

    private rotate(): void {
        if (!this.piece) return;
        const rot = rotateCW(this.piece.shape);
        for (const kick of [0, -1, 1, -2, 2]) {
            if (!this.hits(rot, this.piece.x + kick, this.piece.y)) {
                this.piece.shape = rot;
                this.piece.x += kick;
                return;
            }
        }
    }

    private hardDrop(): void {
        if (!this.piece) return;
        while (this.move(0, 1)) {}
        this.lock();
    }

    private lock(): void {
        if (!this.piece) return;
        for (let r = 0; r < this.piece.shape.length; r++)
            for (let c = 0; c < this.piece.shape[r].length; c++)
                if (this.piece.shape[r][c] && this.piece.y + r >= 0)
                    this.board[this.piece.y + r][this.piece.x + c] = this.piece.color;
        this.clearLines();
        this.spawn();
    }

    private clearLines(): void {
        let n = 0;
        for (let r = this.ROWS - 1; r >= 0; r--) {
            if (this.board[r].every(c => c !== '')) {
                this.board.splice(r, 1);
                this.board.unshift(Array(this.COLS).fill(''));
                n++;
                r++;
            }
        }
        if (n) {
            this.lines += n;
            this.score += this.LINE_PTS[n] * this.level;
            this.level = Math.floor(this.lines / 10) + 1;
            this.dropMs = Math.max(100, 800 - (this.level - 1) * 70);
            this.cb.onScoreUpdate(this.score);
        }
    }

    private ghostY(): number {
        if (!this.piece) return 0;
        let y = this.piece.y;
        while (!this.hits(this.piece.shape, this.piece.x, y + 1)) y++;
        return y;
    }

    private tick = (): void => {
        if (!this.running) return;
        const now = performance.now();
        if (now - this.lastDrop > this.dropMs) {
            if (!this.move(0, 1)) this.lock();
            this.lastDrop = now;
        }
        this.draw();
        this.frameId = requestAnimationFrame(this.tick);
    };

    private draw(): void {
        const ctx = this.ctx;
        ctx.fillStyle = this.theme.bg;
        ctx.fillRect(0, 0, this.w, this.h);
        this.drawGrid();
        this.drawBoard();
        if (this.piece) {
            this.drawShape(this.piece.shape, this.piece.x, this.ghostY(), this.piece.color, 0.15);
            this.drawShape(this.piece.shape, this.piece.x, this.piece.y, this.piece.color, 1);
        }
        this.drawSidebar();
    }

    private drawGrid(): void {
        this.ctx.strokeStyle = this.theme.grid;
        this.ctx.lineWidth = 0.5;
        for (let r = 0; r <= this.ROWS; r++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.ox, this.oy + r * this.cell);
            this.ctx.lineTo(this.ox + this.COLS * this.cell, this.oy + r * this.cell);
            this.ctx.stroke();
        }
        for (let c = 0; c <= this.COLS; c++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.ox + c * this.cell, this.oy);
            this.ctx.lineTo(this.ox + c * this.cell, this.oy + this.ROWS * this.cell);
            this.ctx.stroke();
        }
    }

    private drawCell(col: number, row: number, color: string, alpha = 1): void {
        const g = 1;
        const x = this.ox + col * this.cell + g;
        const y = this.oy + row * this.cell + g;
        const s = this.cell - g * 2;
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, s, s);
        this.ctx.fillStyle = this.theme.highlight;
        this.ctx.fillRect(x, y, s, s * 0.25);
        this.ctx.globalAlpha = 1;
    }

    private drawBoard(): void {
        for (let r = 0; r < this.ROWS; r++)
            for (let c = 0; c < this.COLS; c++)
                if (this.board[r][c]) this.drawCell(c, r, this.board[r][c]);
    }

    private drawShape(shape: number[][], px: number, py: number, color: string, alpha: number): void {
        for (let r = 0; r < shape.length; r++)
            for (let c = 0; c < shape[r].length; c++)
                if (shape[r][c] && py + r >= 0) this.drawCell(px + c, py + r, color, alpha);
    }

    private drawSidebar(): void {
        const x = this.ox + this.COLS * this.cell + 16;
        if (x + 60 > this.w) return;
        const ctx = this.ctx;
        ctx.textAlign = 'left';

        ctx.fillStyle = this.theme.textMuted;
        ctx.font = '600 10px sans-serif';
        ctx.fillText('NEXT', x, this.oy + 12);
        if (this.next) {
            const ps = this.cell * 0.65;
            for (let r = 0; r < this.next.shape.length; r++)
                for (let c = 0; c < this.next.shape[r].length; c++)
                    if (this.next.shape[r][c]) {
                        ctx.fillStyle = pieceColor(this.next, this.isDark);
                        ctx.fillRect(x + c * ps, this.oy + 22 + r * ps, ps - 1, ps - 1);
                    }
        }

        const sy = this.oy + 100;
        ctx.fillStyle = this.theme.textMuted;
        ctx.font = '600 10px sans-serif';
        ctx.fillText('LEVEL', x, sy);
        ctx.fillStyle = this.theme.text;
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText(this.level.toString(), x, sy + 18);
        ctx.fillStyle = this.theme.textMuted;
        ctx.font = '600 10px sans-serif';
        ctx.fillText('LINES', x, sy + 44);
        ctx.fillStyle = this.theme.text;
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText(this.lines.toString(), x, sy + 62);
    }
}
