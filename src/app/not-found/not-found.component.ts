import {
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import { SeoService } from '../services/seo.service';
import { TetrisGame } from './tetris.game';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {
    @ViewChild('gameCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

    gameActive = false;
    gameOver = false;
    score = 0;
    highScore = 0;

    private game: TetrisGame | null = null;
    private readonly storageKey = 'tetrisHighScore';

    constructor(private readonly seoService: SeoService) {}

    ngOnInit(): void {
        this.seoService.update({
            title: '404 — Page Not Found | Anast.dev',
            description: 'The page you are looking for does not exist.',
            urlPath: '/404',
            robots: 'noindex, nofollow'
        });
        this.loadHighScore();
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        const gameKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'];
        if (!this.gameActive && event.code === 'Space') {
            event.preventDefault();
            this.startGame();
            return;
        }
        if (this.gameActive && !this.gameOver && gameKeys.includes(event.code)) {
            event.preventDefault();
            this.game?.handleKey(event.code);
        }
        if (this.gameOver && event.code === 'Space') {
            event.preventDefault();
            this.startGame();
        }
    }

    onTouch(action: string): void {
        if (this.gameActive && !this.gameOver) {
            this.game?.handleKey(action);
        }
    }

    startGame(): void {
        this.gameOver = false;
        this.score = 0;
        this.gameActive = true;

        setTimeout(() => {
            const isDark = document.body.classList.contains('dark');
            this.game = new TetrisGame(this.canvasRef.nativeElement, {
                onScoreUpdate: (s) => this.score = s,
                onGameOver: (s) => this.handleGameOver(s)
            }, isDark);
            this.game.start();
        });
    }

    private handleGameOver(finalScore: number): void {
        this.score = finalScore;
        this.gameOver = true;
        if (finalScore > this.highScore) {
            this.highScore = finalScore;
            this.saveHighScore();
        }
    }

    private loadHighScore(): void {
        const saved = localStorage.getItem(this.storageKey);
        this.highScore = saved ? parseInt(saved, 10) : 0;
    }

    private saveHighScore(): void {
        localStorage.setItem(this.storageKey, this.highScore.toString());
    }

    ngOnDestroy(): void {
        this.game?.destroy();
    }
}
