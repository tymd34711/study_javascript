const quiz = [
    {
        question: "ゲーム市場最も売れたゲーム機は次のうちどれ？",
        answers: [
            'スーパーファミコン',
            'プレーステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    },
    {
        question: "糸井重里が企画にかかわった、任天堂の看板ゲームといえば？",
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    },
    {
        question: "ファイナルファンタジーIVの主人公の名前はといえば？",
        answers: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button")
const buttonLength = $button.length

/* $button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3]; */

// クイズ初期化
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

// ボタンをクリックしたら正誤判定
// e: イベントのオブジェクト
const clickHandler = (e) => {
    if (quiz[quizIndex].correct == e.target.textContent) {
        window.alert("正解!")
        score++;
    } else {
        window.alert("不正解!")
    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題がまだあればこちらを実行
        setupQuiz();
    } else {
        // 問題数がもうなければこちらを実行
        window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です!")
    }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handleIndex++;
};

/* 
$button[0].addEventListener("click", (e) => {
    clickHandler(e);
});

$button[1].addEventListener("click", (e) => {
    clickHandler(e);
});

$button[2].addEventListener("click", (e) => {
    clickHandler(e);
});

$button[3].addEventListener("click", (e) => {
    clickHandler(e);
});
 */


