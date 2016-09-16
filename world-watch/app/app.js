const timezone = {
  "東京": 9, 
  "デリー": 5.5,
  "モスクワ": 3,
  "ベルリン": 1, 
  "パリ": 1, 
  "ロンドン": 0,
  "ニューヨーク": -5,
  "ハワイ": -10,
};
let el = {};
let city = "東京";
let timer;

function setCity(name){
  city = name;
  el = el.city;
  el.textContent = city;
}

function format(value){
  value = "" + value;
  if(value.length < 2){
    value = "0" + value;
  }
  return value.substr(-2);
}

function update(){
  const now = new Date();
  const offset = timezone[city];
  el.hour.textContent = format(now.getHours() - 9 + offset);
  el.min.textContent = format(now.getMinutes());
  el.sec.textContent = format(now.getSeconds());
}

function startClock(){
  timer = setInterval(update, 1000);
}

function stopClock(){
  if(timer){
    clearInterval(timer);
  }
}

function createHandler(li){
  return e => {
    setCity(li.textContent);
    update();
  };
}

function initializeHandlers(){
  const cities = el.cityList;
  for(let i of cities){
    i.addEventListener("click", e => {
      const city = i.textContent;
      setCity(city);
      update
    });
  }
}

function loadElements(){
  el.city = document.querySelector(".city > .name");
  el.hour = document.querySelector(".time > .hour");
  el.min = document.querySelector(".time > .min");
  el.sec = document.querySelector(".time > .sec");
  el.cityList = document.querySelectorAll("#cities > li");
}

function initializeViews(){
  loadElements();
  initializeHandlers();
  el.city.textContent = city;
}

window.addEventListener("load", e => {
  initializeViews();
  startClock();  
})

window.addEventListener("unload", e => {
  stopClock();
})