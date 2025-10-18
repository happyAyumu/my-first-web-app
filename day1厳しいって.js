// HTMLの要素を取得（ここまでは前と同じ）
const myButton = document.getElementById('myButton');
const messageDisplay = document.getElementById('message');

// --- ここから新しい部分 ---

// 表示したいメッセージのリスト（配列）
const messages = [
    '厳しいって',
    '最後に本気出したのいつ？',
    'ジム行け'
];

// 現在表示しているメッセージのインデックス（番号）。最初は0番目から
let currentMessageIndex = 0;

// ボタンがクリックされた時の処理
myButton.addEventListener('click', () => {
    // 1. 現在のインデックスを使って、メッセージを表示エリアに設定
    messageDisplay.textContent = messages[currentMessageIndex];

    // 2. 次のクリックのためにインデックスを1増やす
    currentMessageIndex = currentMessageIndex + 1;

    // 3. もしインデックスがメッセージの総数を超えたら、0に戻す（ループさせる）
    // messages.length は配列 messages の要素数（この場合は 3）
    if (currentMessageIndex >= messages.length) {
        currentMessageIndex = 0; // 最初のメッセージのインデックスに戻す
    }
});