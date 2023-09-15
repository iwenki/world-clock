function updateTimes(){
let spainCard = document.querySelector("#spain");
let spainTimeElement = spainCard.querySelector(".time");
let spainDateElement = spainCard.querySelector(".date");
let spainTime = moment().tz("Europe/Madrid");
spainTimeElement.innerHTML = spainTime.format("hh:mm:ss:SSS a");
spainDateElement.innerHTML = spainTime.format("dddd, MMMM Do, YYYY");

let usaCard = document.querySelector("#usa");
let usaTimeElement = usaCard.querySelector(".time");
let usaDateElement = usaCard.querySelector(".date");
let usaTime = moment().tz("America/Chicago");
usaTimeElement.innerHTML = usaTime.format("hh:mm:ss:SSS a");
usaDateElement.innerHTML = usaTime.format("dddd, MMMM Do, YYYY");

let guatemalaCard = document.querySelector("#guatemala");
let guatemalaTimeElement = guatemalaCard.querySelector(".time");
let guatemalaDateElement = guatemalaCard.querySelector(".date");
let guatemalaTime = moment().tz("America/Guatemala");
guatemalaTimeElement.innerHTML = guatemalaTime.format("hh:mm:ss:SSS a");
guatemalaDateElement.innerHTML = guatemalaTime.format("dddd, MMMM Do, YYYY");

let southKoreaCard = document.querySelector("#southKorea");
let southKoreaTimeElement = southKoreaCard.querySelector(".time");
let southKoreaDateElement = southKoreaCard.querySelector(".date");
let southKoreaTime = moment().tz("Asia/Seoul");
southKoreaTimeElement.innerHTML = southKoreaTime.format("hh:mm:ss:SSS a");
southKoreaDateElement.innerHTML = southKoreaTime.format("dddd, MMMM Do, YYYY");

let kenyaCard = document.querySelector("#kenya");
let kenyaTimeElement = kenyaCard.querySelector(".time");
let kenyaDateElement = kenyaCard.querySelector(".date");
let kenyaTime = moment().tz("Africa/Nairobi");
kenyaTimeElement.innerHTML = kenyaTime.format("hh:mm:ss:SSS a");
kenyaDateElement.innerHTML = kenyaTime.format("dddd, MMMM Do, YYYY");
}

setInterval(updateTimes,1);
updateTimes();
