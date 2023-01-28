// All the Code for All Students Page Goes Here
let LSData = JSON.parse(localStorage.getItem("admission")) || [];
let tbody = document.querySelector("tbody");
let filter = document.getElementById("filter");

function DisplayTable(data) {
  tbody.innerHTML = null;

  data.forEach(function (ele, index) {
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

    let accept = document.createElement("td");
    accept.innerText = "Accept";
    accept.style.backgroundColor = "green";
    accept.addEventListener("click", function () {
      addToLS("admission-accepted", ele);
      Delete(LSData, index);
    });

    let reject = document.createElement("td");
    reject.innerText = "Reject";
    reject.style.backgroundColor="red";
    reject.addEventListener("click", function () {
      addToLS("admission-rejected", ele);
      Delete(LSData, index);
    });

    tr.append(name, email, course, gender, phone, accept, reject);
    tbody.append(tr);
  });
}

DisplayTable(LSData);

filter.addEventListener("change", function () {
  if (filter.value === "all" || filter.value === "") {
    DisplayTable(LSData);
  } else {
    let filterData = LSData.filter(function (ele) {
      return ele.course === filter.value;
    });
    DisplayTable(filterData);
  }
});

function addToLS(key, value) {
  let newLSData = JSON.parse(localStorage.getItem(key)) || [];
  newLSData.push(value);
  localStorage.setItem(key, JSON.stringify(newLSData));
}

function Delete(data, index) {
  LSData = data.filter(function (ele, i) {
    return i != index;
  });
  localStorage.setItem("admission", JSON.stringify(LSData));
  DisplayTable(LSData);
}
