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
}

function updateCity(event) {
  let timeZone = event.target.value;
  let cityName = timeZone.replace("_"," ").split("/")[1];
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
                Weather
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>`;
  } else {
    cities.innerHTML = `<div
          class="card text-bg mb-3 index-card"
          style="max-width: 36rem"
          id="spain"
        >
          <div class="card-header city-name">Barcelona, Spain</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="time"></span>
                <p class="card-text date"></p>
              </div>
              <div class="col">
                Weather
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card text-bg mb-3 index-card"
          style="max-width: 36rem"
          id="usa"
        >
          <div class="card-header city-name">
            Houston, United States of America
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="time"></span>
                <p class="card-text date">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="col">
                Weather
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card text-bg mb-3 index-card"
          style="max-width: 36rem"
          id="guatemala"
        >
          <div class="card-header city-name">Guatemala City, Guatemala</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="time"></span>
                <p class="card-text date">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="col">
                Weather
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card text-bg mb-3 index-card"
          style="max-width: 36rem"
          id="southKorea"
        >
          <div class="card-header city-name">Seoul, South Korea</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="time"></span>
                <p class="card-text date">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="col">
                Weather
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card text-bg mb-3 index-card"
          style="max-width: 36rem"
          id="kenya"
        >
          <div class="card-header city-name">Nairobi, Kenya</div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <span class="time"></span>
                <p class="card-text date">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="col">
                Weather
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>`;
  }
}

setInterval(updateTimes, 1);
updateTimes();
let dropboxElement = document.querySelector("#dropbox");
dropboxElement.addEventListener("change", updateCity);
