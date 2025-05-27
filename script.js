class ColorBreedingGame {
    constructor() {
        this.colors = {
            red: { name: '赤', hex: '#FF0000', type: 'basic', description: '情熱の色。太陽のような暖かさを持っています。' },
            blue: { name: '青', hex: '#0000FF', type: 'basic', description: '冷静の色。空や海のような清涼感があります。' },
            yellow: { name: '黄', hex: '#FFFF00', type: 'basic', description: '喜びの色。太陽の光のように明るいです。' },
            white: { name: '白', hex: '#FFFFFF', type: 'basic', description: '純粋の色。すべての色を含む神秘的な色です。' },
            black: { name: '黒', hex: '#000000', type: 'basic', description: '深淵の色。すべての色を吸収する力強い色です。' }
        };
        this.mixingRules = {}; // ← 今回は省略
        this.discoveredColors = new Set();
        this.userColors = {};
        this.quizScore = 0;
        this.quizTotal = 0;
        this.playerLevel = 1;
        this.init();
    }

    init() {
        this.loadGameData();
        this.updateUI();
        this.setupEventListeners();
    }

    loadGameData() {
        fetch('saveData.json')
            .then(res => res.json())
            .then(data => {
                this.discoveredColors = new Set(data.discoveredColors || []);
                this.userColors = data.userColors || {};
                this.playerLevel = data.playerLevel || 1;
                this.quizScore = data.quizScore || 0;
                this.quizTotal = data.quizTotal || 0;
                this.updateUI();
            })
            .catch(err => {
                console.warn('セーブデータの読み込みに失敗:', err);
                this.discoveredColors = new Set(['red', 'blue', 'yellow', 'white', 'black']);
                this.updateUI();
            });
    }

    setupEventListeners() {
        // 本来のイベント設定コードをここに入れます（例：タブ切替、ボタン操作など）
    }

    updateUI() {
        document.getElementById('discovered-count').textContent = this.discoveredColors.size;
        document.getElementById('player-level').textContent = this.playerLevel;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ColorBreedingGame();
});
