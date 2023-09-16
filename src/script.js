function updateTimes() {
  let spainCard = document.querySelector("#spain");
  if (spainCard) {
    let spainTimeElement = spainCard.querySelector(".time");
    let spainDateElement = spainCard.querySelector(".date");
    let spainTime = moment().tz("Europe/Madrid");
    spainTimeElement.innerHTML = spainTime.format("hh:mm:ss:SSS a");
    spainDateElement.innerHTML = spainTime.format("dddd, MMMM Do, YYYY");
  }
  let usaCard = document.querySelector("#usa");
  if (usaCard) {
    let usaTimeElement = usaCard.querySelector(".time");
    let usaDateElement = usaCard.querySelector(".date");
    let usaTime = moment().tz("America/Chicago");
    usaTimeElement.innerHTML = usaTime.format("hh:mm:ss:SSS a");
    usaDateElement.innerHTML = usaTime.format("dddd, MMMM Do, YYYY");
  }
  let guatemalaCard = document.querySelector("#guatemala");
  if (guatemalaCard) {
    let guatemalaTimeElement = guatemalaCard.querySelector(".time");
    let guatemalaDateElement = guatemalaCard.querySelector(".date");
    let guatemalaTime = moment().tz("America/Guatemala");
    guatemalaTimeElement.innerHTML = guatemalaTime.format("hh:mm:ss:SSS a");
    guatemalaDateElement.innerHTML = guatemalaTime.format(
      "dddd, MMMM Do, YYYY"
    );
  }
  let southKoreaCard = document.querySelector("#southKorea");
  if (southKoreaCard) {
    let southKoreaTimeElement = southKoreaCard.querySelector(".time");
    let southKoreaDateElement = southKoreaCard.querySelector(".date");
    let southKoreaTime = moment().tz("Asia/Seoul");
    southKoreaTimeElement.innerHTML = southKoreaTime.format("hh:mm:ss:SSS a");
    southKoreaDateElement.innerHTML = southKoreaTime.format(
      "dddd, MMMM Do, YYYY"
    );
  }
  let kenyaCard = document.querySelector("#kenya");
  if (kenyaCard) {
    let kenyaTimeElement = kenyaCard.querySelector(".time");
    let kenyaDateElement = kenyaCard.querySelector(".date");
    let kenyaTime = moment().tz("Africa/Nairobi");
    kenyaTimeElement.innerHTML = kenyaTime.format("hh:mm:ss:SSS a");
    kenyaDateElement.innerHTML = kenyaTime.format("dddd, MMMM Do, YYYY");
  }
  activateApi();
}
function updateCity(event) {
  function individualCities(){
  let timeZone = event.target.value;
  if (timeZone === "local") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);
  let cities = document.querySelector("#indexCities");
  if (timeZone.length > 0) {
    cities.innerHTML = `<div
          class="card text-bg mb-3 index-card"
          style="max-width: 36rem"
        >
          <div class="card-header city-name">${cityName} </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="time"> ${cityTime.format("hh:mm:ss:SSS a")}</span>
                <p class="card-text date">${cityTime.format(
                  "dddd, MMMM Do, YYYY"
                )}</p>
              </div>
              <div class="col">
                <span class="weather-icon"></span>
                <div class="temperature"></div>
                <p class="card-text description">
                </p>
              </div>
            </div>
          </div>
        </div>`;
  } 
}
setInterval(individualCities,1);
individualCities();
  }


function activateApi() {
  let cityName = document.querySelector(".justCityName");
  const apiKey = "cbc90ba0a21t28a990f44b7f6f3ea68o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
function handleResponse(response) {
  let temperature = document.querySelector(".temperature");
  let description = document.querySelector(".description");
  let iconElement = document.querySelector(".weather-icon");
  let celsiusTemp = response.data.temperature.current;
  iconElement.innerHTML = response.data.condition.icon;
  temperature.innerHTML = Math.round(celsiusTemp);
  description.innerHTML = response.data.condition.description;
}

setInterval(updateTimes, 1);
updateTimes();
let dropboxElement = document.querySelector("#dropbox");
dropboxElement.addEventListener("change", updateCity);
