window.addEventListener("load", start);
let goals = "";

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
}

function startGoals(){
  console.log("start");
  document.querySelector(".the-model").classList.add("transform-model");
  document.querySelector(".model-con").classList.add("scale-model");
  document.querySelector("#goals").style.fill = "#2B4546";
  document.querySelector(".section-principles-text").classList.add("fade-out");
  document.querySelector(".goals-appear").classList.remove("hide");
  document.querySelector(".goals-appear").classList.add("appear");
  document.querySelector(".section-principles-col1").addEventListener("click", endModel);
  goals = "true";
  exploreModel();
}

function exploreModel(){
  if(goals=="true"){
    console.log("clicked goals")
  }
}

function startCustomers(){
    console.log("start");
    document.querySelector(".the-model").classList.add("transform-model");
    document.querySelector(".model-con").classList.add("scale-model");
    document.querySelector("#customers").style.fill = "#2B4546";
    document.querySelector(".section-principles-text").classList.add("fade-out");
    // document.querySelector("#Lag_1").classList.add("rotate-customers");
  
    document.querySelector(".customer-appear").classList.remove("hide");
    document.querySelector(".customer-appear").classList.add("appear");
    document.querySelector(".section-principles-col1").addEventListener("click", endModel);
}

function endModel(){
  console.log("end");
  document.querySelector(".the-model").classList.remove("transform-model");
  document.querySelector(".model-con").classList.remove("scale-model");
  document.querySelector("#goals").style.fill = "D9D9D9";
  document.querySelector(".section-principles-text").classList.remove("fade-out");
  document.querySelectorAll(".model-txt").forEach(txt => {
    txt.classList.add("fade-out");
    txt.classList.remove("appear");

    txt.classList.add("hide");
  });
}