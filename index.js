// 変数
let unko = 'Hello World!';

// unko = 'Hello World2!'

// 定数
const bigUnko = "He..Hell...Hello World!"
// bigUnko = "Hello world2!"

// 配列
let inoki = ['いーち', 'にーい', 'さーん', 'だー!'];

// ループ分
/* let index = 0;
while(index < inoki.length){
  // 繰り返したい命令
  console.log(inoki[index]);
  index++;
} */

// if else
/* if(inoki.length > 5){
    console.log('ボンバイエ！');
} else {
    console.log('ぼんば');
} */

// 関数
const test = (arg) => {
    if(inoki.length > arg){
        console.log('ボンバイエ！');
    } else {
        console.log('ぼんば');
    }
};

/* test(3);
test(5);
test(5);
test(6); */

// オブジェクト: 関数も入れることが可能
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log("Hello world!")
    }
};

///console.log(unko2.color);
// console.log(unko2.goToilet());

// デフォルトのオブジェクト

// windowオブジェクト: ブラウザ全体
//console.log(window.innerWidth);
//window.alert('Unko!');

// documentオブジェクト: 表示しているページ全体のオブジェクト
// console.log(document)
// console.log(document.getElementsByTagName('button'));

// event: ユーザーがアクションをしたタイミングで何かをしたいときに使う
document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    window.alert("Hello world!")
})
