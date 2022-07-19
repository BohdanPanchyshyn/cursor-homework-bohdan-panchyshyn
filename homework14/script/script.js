const buttonNextPlanet = document.getElementById("nextPln");
const buttonPreviousPlanet = document.getElementById("prevPln");
const buttonGetPlanet = document.getElementById("getPln");
const inputNumberPlanets = document.getElementById("numberFilms");
const buttonGetInfo = document.getElementById("getUsr");
const getNumberFilms = document.getElementById("numberFilms");
const container = document.getElementById("container");
const boxLoader = document.getElementById("boxLoader");
const loader = document.getElementById("loader");
const BASE_URL = "https://swapi.dev/api";
let nextNextLink = "https://swapi.dev/api/planets/?page=2";
let previosLink = null;


async function showActorsFilms() {
   startLoader();
   const numberFilms = getNumberFilms.value;
   if (numberFilms < 1 || numberFilms > 6) alert("Please, enter 1 to 6!"), endLoader();
   const request = await fetch(`${BASE_URL}/films/${numberFilms}`);
   const response = await request.json();
   const massLinkActors = response.characters;
   getActors(massLinkActors);
}


async function getActors(params) {
   const allPromises = params.map((el) => fetch(`${el}`))
   const responses = await Promise.all(allPromises)
   const data = await Promise.all(responses.map(r => r.json()))
   endLoader();
   createCardActor(data);
}

async function showPlanets() {
   startLoader();
   const request = await fetch(`${BASE_URL}/planets/`);
   const response = await request.json();
   const massPlanet = response.results;
   endLoader();
   createPlanet(massPlanet);
}

async function nextPlanets() {
   startLoader();
   const request = await fetch(`${nextNextLink}`);
   const response = await request.json();
   if (response.next) nextNextLink = response.next;
   if (response.previous) previosLink = response.previous;
   const massPlanet = response.results;
   endLoader();
   createPlanet(massPlanet);
}

async function previosPlanets() {
   startLoader();
   const request = await fetch(`${previosLink}`);
   const response = await request.json();
   if (response.next) nextNextLink = response.next;
   if (response.previous) previosLink = response.previous;
   const massPlanet = response.results;
   endLoader();
   createPlanet(massPlanet);
}

function createCardActor(params) {
   params.map((el) => {
      let cardUser = document.createElement("div");
      cardUser.classList.add("styleCard");
      cardUser.append(addImg(el.name));
      cardUser.append(addTagP(el.name));
      cardUser.append(addTagP(el.birth_year));
      cardUser.append(addImgGender(el.gender));
      container.append(cardUser);
   })
}

function createPlanet(params) {
   params.filter((el) => {
      let planet = document.createElement("div");
      let namePlanet = document.createElement("p");
      planet.classList.add("stylePlanet");
      namePlanet.classList.add("stylePlanetText");
      namePlanet.append(el.name);
      planet.append(namePlanet);
      container.append(planet);
   })
}


function addImg(params) {
   let photo = new Image();
   photo.classList.add("styleImageCard")
   photo.src = `./media/${params}.webp`
   return photo;
}

function addImgGender(params) {
   let photo = new Image();
   photo.classList.add("styleImageGender")
   if (params === "n/a" || params === "none") {
      photo.src = `./media/robot.png`
   } else {
      photo.src = `./media/${params}.png`
   }
   return photo;
}

function addTagP(params) {
   let charUser = document.createElement("p");
   charUser.classList.add("styleTextCard");
   charUser.append(params);
   return charUser;
}

function startLoader() {
   clearContainer();
   container.classList.remove("container")
   boxLoader.classList.add("boxLoader");
   loader.classList.add("loader")
}

function endLoader() {
   loader.classList.remove("loader")
   boxLoader.classList.remove("boxLoader");
   container.classList.add("container")
}

function clearContainer() {
   return document.getElementById("container").innerHTML = ``;
}


buttonGetInfo.addEventListener("click", () => showActorsFilms());
buttonNextPlanet.addEventListener("click", () => nextPlanets());
buttonPreviousPlanet.addEventListener("click", () => previosPlanets());
buttonGetPlanet.addEventListener("click", () => showPlanets());