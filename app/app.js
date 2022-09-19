import * as MODEL from "./model.js";

function initListeners() {
  $("nav a").click((e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;

    MODEL.setCurrentPageContent(btnID);
    console.log(btnID);

    if (btnID == "home") {
      tourBtnListener();
    }
  });
}

function tourBtnListener() {
  $("#tour-btn").click((e) => {
    e.preventDefault();
    console.log("test");
    MODEL.setCurrentPageContent("tours");
  });
}

$(document).ready(function () {
  MODEL.setCurrentPageContent("home");
  initListeners();
  tourBtnListener();
});
