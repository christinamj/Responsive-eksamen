window.addEventListener("load", start);
let goals = "";
let data ="";
let people = "";
let concept = "";
let tech = "";
let customers = "";


function start(){
  fetchModel();
}


async function fetchModel(){
  let response = await fetch("img/principles-model.svg");
  let mySvgData = await response.text();
  document.querySelector(".the-model").innerHTML = mySvgData;
  listen();
}

function listen(){
  document.querySelectorAll("#goals, #goals-2").forEach(link => {
    link.addEventListener("click", startGoals);
  });
  document.querySelectorAll("#customers, #customers-2").forEach(link => {
    link.addEventListener("click", startCustomers);
  });
  document.querySelectorAll("#people, #people-2").forEach(link => {
    link.addEventListener("click", startPeople);
  });
  document.querySelectorAll("#data, #data-2").forEach(link => {
    link.addEventListener("click", startData);
  });
  document.querySelectorAll("#tect, #tech-2").forEach(link => {
    link.addEventListener("click", startTech);
  });
  document.querySelectorAll("#concept, #concept-2").forEach(link => {
    link.addEventListener("click", startConcept);
  });
}

function startGoals(){
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".model-con").classList.add("scale-model");
  document.querySelector(".section-principles-text").classList.add("fade-out");
  // document.querySelector(".goals-appear").classList.remove("hide");
  goals = "true";
  exploreModel();
}

function startCustomers(){
  document.querySelector("#customers").style.fill = "#2B4546";
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".model-con").classList.add("scale-model");
  document.querySelector(".section-principles-text").classList.add("fade-out");
  // document.querySelector("#Lag_1").classList.add("rotate-customers");
  customers = "true";
  exploreModel();
}

function startConcept(){
  document.querySelector("#concept").style.fill = "#2B4546";
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".model-con").classList.add("scale-model");
  document.querySelector(".section-principles-text").classList.add("fade-out");
  // document.querySelector("#Lag_1").classList.add("rotate-customers");
  concept = "true";
  exploreModel();
}

function startPeople(){
  document.querySelector("#people").style.fill = "#2B4546";
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".model-con").classList.add("scale-model");
  document.querySelector(".section-principles-text").classList.add("fade-out");
  // document.querySelector("#Lag_1").classList.add("rotate-customers");
  people = "true";
  exploreModel();
}

function startData(){
  document.querySelector("#data").style.fill = "#2B4546";
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".model-con").classList.add("scale-model");
  document.querySelector(".section-principles-text").classList.add("fade-out");
  // document.querySelector("#Lag_1").classList.add("rotate-customers");
  data = "true";
  exploreModel();
}

function startTech(){
  document.querySelector("#tech").style.fill = "#2B4546";
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".model-con").classList.add("scale-model");
  document.querySelector(".section-principles-text").classList.add("fade-out");
  // document.querySelector("#Lag_1").classList.add("rotate-customers");
  tech = "true";
  exploreModel();
}

function exploreModel(){

  document.querySelectorAll(".model-txt").forEach(text => {
    text.classList.add("hide")
  });
  if(goals=="true"){
    console.log("clicked goals")
    document.querySelector("#goals").style.fill = "#2B4546";
    document.querySelector(".goals-appear").classList.remove("hide");
    document.querySelector(".goals-appear").classList.add("appear");
  }

  else if(customers=="true"){
    console.log("clicked customers")
    document.querySelector("#customers").style.fill = "#2B4546";
    document.querySelector(".customer-appear").classList.remove("hide");
    document.querySelector(".customer-appear").classList.add("appear");
  }

  else if(concept=="true"){
    console.log("clicked concept")
    document.querySelector("#concept").style.fill = "#2B4546";
    document.querySelector(".concept-appear").classList.remove("hide");
    document.querySelector(".concept-appear").classList.add("appear");
  }

  else if(people=="true"){
    console.log("clicked people")
    document.querySelector("#people").style.fill = "#2B4546";
    document.querySelector(".people-appear").classList.remove("hide");
    document.querySelector(".people-appear").classList.add("appear");
  }

  else if(tech=="true"){
    console.log("clicked people")
    document.querySelector("#tech").style.fill = "#2B4546";
    document.querySelector(".tech-appear").classList.remove("hide");
    document.querySelector(".tech-appear").classList.add("appear");
  }

  else if(data=="true"){
    console.log("clicked people")
    document.querySelector("#data").style.fill = "#2B4546";
    document.querySelector(".data-appear").classList.remove("hide");
    document.querySelector(".data-appear").classList.add("appear");
  }




  document.querySelector(".section-principles-col1").addEventListener("click", endModel);

  document.querySelectorAll("#goals, #goals-2").forEach(link => {
    link.addEventListener("click", goalsRunning);
  });
  document.querySelectorAll("#customers, #customers-2").forEach(link => {
    link.addEventListener("click", customersRunning);
  });
  document.querySelectorAll("#people, #people-2").forEach(link => {
    link.addEventListener("click", peopleRunning);
  });
  document.querySelectorAll("#data, #data-2").forEach(link => {
    link.addEventListener("click", dataRunning);
  });
  document.querySelectorAll("#tect, #tech-2").forEach(link => {
    link.addEventListener("click", techRunning);
  });
  document.querySelectorAll("#concept, #concept-2").forEach(link => {
    link.addEventListener("click", conceptRunning);
  });
}

function goalsRunning (){
  goals = "true";
  modelRunning()
}

function customersRunning (){
  customers = "true";
  modelRunning()
}

function dataRunning (){
  data = "true";
  modelRunning()
}

function peopleRunning (){
  people = "true";
  modelRunning()
}

function techRunning (){
  tech = "true";
  modelRunning()
}

function conceptRunning (){
  concept = "true";
  modelRunning()
}

function modelRunning (){
  document.querySelectorAll(".model-txt").forEach(text => {
    text.classList.add("hide")
  });
  if(goals=="true"){
    console.log("clicked goals")
    document.querySelector("#goals").style.fill = "#2B4546";
    document.querySelector(".goals-appear").classList.remove("hide");
    document.querySelector(".goals-appear").classList.add("appear");
  }

  else if(customers=="true"){
    console.log("clicked customers")
    document.querySelector("#customers").style.fill = "#2B4546";
    document.querySelector(".customer-appear").classList.remove("hide");
    document.querySelector(".customer-appear").classList.add("appear");
  }

  else if(concept=="true"){
    console.log("clicked concept")
    document.querySelector("#concept").style.fill = "#2B4546";
    document.querySelector(".concept-appear").classList.remove("hide");
    document.querySelector(".concept-appear").classList.add("appear");
  }

  else if(people=="true"){
    console.log("clicked people")
    document.querySelector("#people").style.fill = "#2B4546";
    document.querySelector(".people-appear").classList.remove("hide");
    document.querySelector(".people-appear").classList.add("appear");
  }

  else if(tech=="true"){
    console.log("clicked people")
    document.querySelector("#tech").style.fill = "#2B4546";
    document.querySelector(".tech-appear").classList.remove("hide");
    document.querySelector(".tech-appear").classList.add("appear");
  }

  else if(data=="true"){
    console.log("clicked people")
    document.querySelector("#data").style.fill = "#2B4546";
    document.querySelector(".data-appear").classList.remove("hide");
    document.querySelector(".data-appear").classList.add("appear");
  }

  document.querySelector(".section-principles-col1").addEventListener("click", endModel);

}



function endModel(){
  console.log("end");
  data = "false";
  people = "false";
  tech = "false";
  concept = "false";
  goals = "false";
  customers = "false";
  document.querySelector(".the-model").classList.remove("transform-model");
  document.querySelector(".model-con").classList.remove("scale-model");
  document.querySelector("#goals").style.fill = "D9D9D9";

  document.querySelectorAll("#goals, #data, #people, #tech, #customers, #concept").forEach(one => {
    one.style.fill = "#d9d9d9";
  });
  document.querySelector(".section-principles-text").classList.remove("fade-out");
  document.querySelectorAll(".model-txt").forEach(txt => {
    txt.classList.add("fade-out");
    txt.classList.remove("appear");

    txt.classList.add("hide");
  });
}