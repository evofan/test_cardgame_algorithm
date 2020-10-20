console.log("Card Test");

console.log("\n・ランダムに1枚のカードを引く");

// 52枚（ジョーカーある場合は53枚）の中からランダムでカードを引く
// スペードの1-13、ハートの1-13、ダイヤの1-13、クラブの1-13、（有ればジョーカー）
// を0-51（又は52）の連番で管理する方法

// 指定範囲内のランダムな数値を得る
// Math.random() * (max - min) + min;
let max_card_num = 52;
let min_card_num = 0;
let rnd_num = Math.floor(Math.random() * (max_card_num - min_card_num) + min_card_num);

// カードの種類

// test直指定
// rnd_num = 52;

console.log("rnd_num: ", rnd_num);

let USE_JOKER = false;
getCard();

function getCard() {
    if (max_card_num === 52) { USE_JOKER = true; }
    if (USE_JOKER && rnd_num === 52) {
        console.log("ジョーカーです")
    } else {
        let suit = Math.floor(rnd_num / 13);
        console.log("suit: ", suit);
        switch (suit) {
            case 0:
                console.log("スペード♠です");
                break;
            case 1:
                console.log("ハート♥です");
                break;
            case 2:
                console.log("ダイヤ♦です");
                break;
            case 3:
                console.log("クラブ♣です");
                break;
            default:
                console.log("error");
                break;
        }
        let card = Math.floor(rnd_num % 13 + 1);
        console.log(`${card}です`);
    }
}


console.log("\n・ランダムに1枚のカードを引いていき、カードが0枚になるまで繰り返す");

let card_ary = [];
for (let i = 0; i <= max_card_num; i++) {
    card_ary.push(i);
}
console.log(card_ary);

let left_card_num = max_card_num;
let left_ary = card_ary;

//card_ary.map((ele, idx) => {
//console.log("\nidx: ", idx);
for (let j = 0; j < max_card_num; j++) {
    console.log("\nj: ", j);
    //let rnd_num = Math.floor(Math.random() * (left_card_num - min_card_num) + min_card_num);
    let rnd_num = left_ary[Math.floor(Math.random() * (left_ary.length - min_card_num) + min_card_num)];
    console.log("引いたカードは、", rnd_num);
    let temp_num;
    left_ary.map((ele, index) => {
        if (ele === rnd_num) {
            temp_num = rnd_num;
            left_ary.splice(index, 1);
            getCard2(temp_num, index);
            //getCard2(temp_num, j);
            left_card_num--;
            console.log(left_ary);
        }
    })
}
//})

function getCard2(e, idx) {
    console.log(`${idx}番目のカード：${e}`)
    if (max_card_num === 52) { USE_JOKER = true; }
    if (USE_JOKER && e === 52) {
        console.log("ジョーカーです")
    } else {
        let suit = Math.floor(e / 13);
        console.log("suit: ", suit);
        switch (suit) {
            case 0:
                console.log("スペード♠です");
                break;
            case 1:
                console.log("ハート♥です");
                break;
            case 2:
                console.log("ダイヤ♦です");
                break;
            case 3:
                console.log("クラブ♣です");
                break;
            default:
                console.log("error");
                break;
        }
        let card = Math.floor(e % 13 + 1);
        console.log(`数字は、${card}です`);
    }
}