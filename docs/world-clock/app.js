// UTCからの時差の表
const timezone = {
  "東京": 32400000, 
  "デリー": 19800000,
  "モスクワ": 10800000,
  "ベルリン": 3600000, 
  "パリ": 3600000, 
  "ロンドン": 0,
  "ニューヨーク": -18000000,
  "ロスアンゼルス": -25200000,
  "ハワイ": -36000000,
};
// ビュー用の要素をキャッシュするための表
let el = {};
/*
最終的には次の属性ができます
  city: 都市名を表示する HTML 要素
  hour: 時を表示する HTML 要素
  min: 分を表示する HTML 要素
  sec: 秒を表示する HTML 要素
  cityList: それぞれの都市名の書かれた HTML 要素をもつ NodeList
*/

// 現在表示する都市名
let city = "東京";

// window.setInterval の返り値を保存するための
let timer;

// 表示する都市を変更する関数
function setCity(name){
  city = name;
  el.city.textContent = city;
}

// 二桁の数字を文字列に変換する関数
// 一桁の場合は、09 のように 0 を補って返す
function format(value){ 
  return (value < 10 ? "0" : "") + value;
}

// 時刻の表示を更新する関数
function update(){
  try{
    const now = new Date();
    const offset = timezone[city] + now.getTimezoneOffset() * 60000;
    const toShow = new Date(now.getTime() + offset); 
    el.hour.textContent = format(toShow.getHours());
    el.min.textContent = format(toShow.getMinutes());
    el.sec.textContent = format(toShow.getSeconds());
  }catch(e){
    stopClock();
    throw e;
  }
}

// 表示の定期的な更新を開始する関数
function startClock(){
  timer = setInterval(update, 1000);
}

// 表示の定期的な更新を停止する関数
function stopClock(){
  if(timer){
    clearInterval(timer);
  }
}

// 都市名をクリックされた際のハンドラを生成する関数
function createHandler(li){
  return e => {
    setCity(li.textContent);
    update();
  };
}

// ビュー用の要素にイベントハンドラを設定する関数
function initializeHandlers(){
  const cities = el.cityList;
  for(let i of cities){
    const handler = createHandler(i);
    i.addEventListener("click", handler);
  }
}

// ビュー用の要素の取得
function loadElements(){
  el.city = document.querySelector(".city > .name");
  el.hour = document.querySelector(".time > .hour");
  el.min = document.querySelector(".time > .min");
  el.sec = document.querySelector(".time > .sec");
  el.cityList = document.querySelectorAll("#cities > li");
}

// ビューの初期化。
function initializeViews(){
  loadElements();
  initializeHandlers();
  setCity(city); 
}

// ページロード時のハンドラ
window.addEventListener("load", e => {
  initializeViews();
  startClock();  
})

// ページのアンロード（閉じたり、リロード時）のハンドラ
window.addEventListener("unload", e => {
  stopClock();
})