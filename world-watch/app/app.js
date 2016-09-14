const timezone = {
  "東京": 9 * 3600 * 1000,
  "デリー": 5.5 * 3600 * 1000,
  "モスクワ": 3 * 3600 * 1000,
  "ベルリン": 1 * 3600 * 1000, 
  "パリ": 1 * 3600 * 1000, 
  "ロンドン": 0 * 3600 * 1000,
  "ニューヨーク": -5 * 3600 * 1000,
  "ハワイ": -10 * 3600 * 1000,
};
let el = {};
let city;
let timer;

function setCity(name){
  city = name;
  console.log(`changed the city to ${city}`);
  el.city.textContent = city;
}

function format(value){
  return value > 9 ? value + "" : "0" + value; 
}

function nowAt(city){
  const now = new Date();
  const localOffset = now.getTimezoneOffset() * 60 * 1000;
  const offset = timezone[city];
  return new Date(now.getTime() + localOffset + offset);
}

function update(){
  const now = nowAt(city);
  el.hour.textContent = format(now.getHours());
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
    i.addEventListener("click", createHandler(i));
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
}

window.addEventListener("load", e => {
  initializeViews();
  setCity("東京");
  startClock();  
})

window.addEventListener("unload", e => {
  stopClock();
})