"use strict";
/* A1_XingjianREN_301231054_2022/10/07 */
const bnt = document.getElementById("submitBtn");
function submit() {
  const Mname = document.getElementById("name").innerHTML();
  const Memail = document.getElementById("email").innerHTML();
  const Mphone = document.getElementById("phone").innerHTML();
  const Message = document.getElementById("message").innerHTML();
  if (Mname == "" || Message == "") {
    alert("Please fill in your name and message content");
    console.log("123");
  }
}
