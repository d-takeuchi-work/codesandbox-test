/**
 * テンプレート文字列
 */

// const name = "だいき";
// const age = 25;
//「私の名前はだいきです。年齢は２５歳です。」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

///////////////////////////////////////////////////////////////////////////
/**
 * アロー関数
 */

// function func1(str) {
//   return str;
// }

//  const func1 = function(str){
//    return str;
//  }

//  console.log(func1("func1です。"));

// const func2 = (str) => {
//   return str;
// };

//こんな書き方もできる
// const func2 = (str) => str;
//  console.log(func2("func2です。"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }

// console.log(func3(20,30));

///////////////////////////////////////////////////////////////////////////

/**
 * 分割代入
 */

//  const myProfile = {
//    name:"だいき",
//    age:25,
//  };

//  const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message3);

// const {name,age} = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message4);

// const myProfile = ["だいき", 25];
// const message5 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;

// console.log(message5);

// const [name, age] = myProfile;
// const message6 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message6);

///////////////////////////////////////////////////////////////////////////

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();
// sayHello("だいき");

///////////////////////////////////////////////////////////////////////////

/**
 * スプレッド構文　...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4,...arr5];
// console.log(arr6);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

///////////////////////////////////////////////////////////////////////////

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "だいき"];
//  for(let index = 0;index < nameArr.length;index++){
//    console.log(`${index + 1}番目は${nameArr[index]}です`);
//  }

//  const nameArr2 = nameArr.map((name)=>{
//    return name;
//  })
//  console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index + 1}番目は${nameArr[index]}です`));

// const numArr = [1,2,3,4,5];
// const  newNumArr = numArr.filter((name) => {
//   return name % 2 === 1;
// })

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "だいき") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

///////////////////////////////////////////////////////////////////////////

/**
 * 三項演算子
 */

// ある条件　 ? 条件がtrueの時 :  条件がfalseの時
//  const  val1 = 1 > 0 ? 'trueです' : 'falseです';
//  console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "１００を超えています！！" : "許容範囲内です。";
// };

// console.log(checkSum(50, 60));

///////////////////////////////////////////////////////////////////////////

/**
 * 論理演算子の本当の意味を知ろう　 &&
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か２はtrueになります。");
// }

// if (flag1 && flag2) {
//   console.log("1と２はtrueになります。");
// }

// ||は左側がflaseなら右を返す
// jsではnullはfalse判定なので以下のことができる
// const num = null;
// const fee = num || "金額未設定です";
// console.log();

// &&は左側がtrueな右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
