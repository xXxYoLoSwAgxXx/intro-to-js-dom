// console.log("sanitycheck");
// console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);
// console.log(document.getElementsByTagName("div"));
var tag = document.getElementsByTagName("div");
console.log(tag);

var clas = document.getElementsByClassName("use-class-method");

idElement.innerHTML = "i have been changed";
console.log(idElement.innerHTML);