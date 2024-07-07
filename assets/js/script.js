var jsonArray = ["a"];
jsonArray.pop();

if(localStorage.getItem("data")) {
  jsonArray = jsonArray.concat(JSON.parse(localStorage.getItem("data")));
}
localStorage.clear();

document.getElementById('myForm').onsubmit = function() {

  var name = document.getElementById('name').value;
  var blogTitle = document.getElementById('blog-title').value;
  var blogContent = document.getElementById('content').value;

  var data = {"name": name, "title": blogTitle, "content": blogContent};

  jsonArray.push(data);

  localStorage.setItem("data", JSON.stringify(jsonArray));
}