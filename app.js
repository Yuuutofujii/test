// じゃんけんの選択肢
const choices = ['グー', 'チョキ', 'パー'];

// ユーザーの選択ボタンを取得
const rockButton = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');

// 結果表示部分を取得
const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');

// リセットボタンを取得
const resetButton = document.getElementById('reset');

// コンピューターの選択をランダムに決定する関数
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// 勝敗を判定する関数
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'あいこ';
    }
    if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        return '勝ち';
    } else {
        return '負け';
    }
}

// ユーザーが選択した場合の処理
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    userChoiceElement.textContent = userChoice;
    computerChoiceElement.textContent = computerChoice;

    const result = determineWinner(userChoice, computerChoice);
    resultElement.textContent = `結果: ${result}`;
}

// ボタンにイベントリスナーを追加
rockButton.addEventListener('click', () => playGame('グー'));
scissorsButton.addEventListener('click', () => playGame('チョキ'));
paperButton.addEventListener('click', () => playGame('パー'));

// リセットボタンの処理
resetButton.addEventListener('click', () => {
    userChoiceElement.textContent = 'なし';
    computerChoiceElement.textContent = 'なし';
    resultElement.textContent = '結果: まだ対戦していません';
});

// Service Workerの登録
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}
