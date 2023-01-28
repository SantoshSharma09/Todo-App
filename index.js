// All the JS Code for the Add Students Page Goes Here

let LSData = JSON.parse(localStorage.getItem("admission")) || [];
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    name: form.name.value, //form.document.querySelector("#name").value
    email: form.email.value,
    phone: form.phone.value,
    gender: form.gender.value,
    course: form.course.value,
  };
  // console.log(obj);
  if (
    obj.name == "" ||
    obj.email == "" ||
    obj.phone == "" ||
    obj.gender == "" ||
    obj.course == ""
  ) {
    alert("some fields are empty");
  } else {
    LSData.push(obj);
    localStorage.setItem("admission", JSON.stringify(LSData));
  }
  //   LSData.push(obj);
  //   localStorage.setItem("admission", JSON.stringify(LSData));
});
