export interface TetrisPiece {
    shape: number[][];
    darkColor: string;
    lightColor: string;
}

export interface TetrisTheme {
    bg: string;
    grid: string;
    text: string;
    textMuted: string;
    highlight: string;
}

export const THEME_DARK: TetrisTheme = {
    bg: '#0a0a0a',
    grid: '#1c1c1e',
    text: '#faf8f5',
    textMuted: '#636366',
    highlight: 'rgba(255,255,255,0.12)',
};

export const THEME_LIGHT: TetrisTheme = {
    bg: '#faf8f5',
    grid: '#e5e5ea',
    text: '#0f0f0f',
    textMuted: '#8e8e93',
    highlight: 'rgba(0,0,0,0.06)',
};

// I-piece, O, T, S, Z, J, L — each with dark/light color variants (using project theme)
export const TETRIS_PIECES: TetrisPiece[] = [
    { shape: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], darkColor: '#c4856c', lightColor: '#c4856c' },  // I: accent
    { shape: [[1,1],[1,1]],                               darkColor: '#d4a08a', lightColor: '#b07660' },  // O: accent variant
    { shape: [[0,1,0],[1,1,1],[0,0,0]],                   darkColor: '#8e8e93', lightColor: '#636366' },  // T: blue-500/600
    { shape: [[0,1,1],[1,1,0],[0,0,0]],                   darkColor: '#c7c7cc', lightColor: '#3a3a3c' },  // S: blue-300/700
    { shape: [[1,1,0],[0,1,1],[0,0,0]],                   darkColor: '#aeaeb2', lightColor: '#636366' },  // Z: blue-400/600
    { shape: [[1,0,0],[1,1,1],[0,0,0]],                   darkColor: '#636366', lightColor: '#8e8e93' },  // J: blue-600/500
    { shape: [[0,0,1],[1,1,1],[0,0,0]],                   darkColor: '#e5e5ea', lightColor: '#1c1c1e' },  // L: blue-200/800
];

export function rotateCW(shape: number[][]): number[][] {
    const n = shape.length;
    const out: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    for (let r = 0; r < n; r++)
        for (let c = 0; c < n; c++)
            out[c][n - 1 - r] = shape[r][c];
    return out;
}

export function pieceColor(piece: TetrisPiece, isDark: boolean): string {
    return isDark ? piece.darkColor : piece.lightColor;
}
