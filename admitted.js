// All the Code for All Students Page Goes Here

let tbody = document.querySelector("tbody");
let LSData = JSON.parse(localStorage.getItem("admission-accepted")) || [];

function DisplayTable(data) {
  tbody.innerHTML = null;

  data.forEach(function (ele) {
    let tr = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText = ele.name;

    let email = document.createElement("td");
    email.innerText = ele.email;

    let course = document.createElement("td");
    course.innerText = ele.course;

    let gender = document.createElement("td");
    gender.innerText = ele.gender;

    let phone = document.createElement("td");
    phone.innerText = ele.phone;

    tr.append(name, email, course, gender, phone);
    tbody.append(tr);
  });
}

DisplayTable(LSData);
