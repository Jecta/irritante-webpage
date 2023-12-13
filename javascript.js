function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function openform() {
  document.getElementById("myform").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let rickroll = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png";

document.getElementById("phone").addEventListener("click", function() {
  document.getElementById("phone").src = rickroll;
  document.getElementById("phone").style.animationName = "phone";
  document.getElementById("phone").style.animation = "phone 0.5s linear infinite";
  document.getElementById("phone").style.animationDelay = "1.5s";
})