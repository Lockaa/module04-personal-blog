var jsonArray = [];
var submitBtn = document.getElementById("myForm");

if(localStorage.getItem("data")) {
  jsonArray = JSON.parse(localStorage.getItem("data"));
}

function doForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var blogTitle = document.getElementById("blog-title").value;
  var blogContent = document.getElementById("content").value;

  var data = {"name": name, "title": blogTitle, "content": blogContent};
  jsonArray.push(data);
  localStorage.setItem("data", JSON.stringify(jsonArray));

  window.location.href = "./blog.html";
};

submitBtn.addEventListener("submit", doForm);