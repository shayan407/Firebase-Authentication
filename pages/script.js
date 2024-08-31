let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let faName = document.getElementById("faname");
let email = document.getElementById("email");
let button = document.getElementById("btn");
let tableBody = document.getElementById("table-body");

button.addEventListener("click", function Add() {
  if (fName.value && lName.value && faName.value && email.value) {
    let row = document.createElement("tr");
    row.innerHTML = `
            <td>${fName.value}</td>
            <td>${lName.value}</td>
            <td>${faName.value}</td>
            <td>${email.value}</td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="del-btn">Delete</button></td>
          `;
    tableBody.appendChild(row);

    fName.value = "";
    lName.value = "";
    faName.value = "";
    email.value = "";

    row.querySelector(".del-btn").addEventListener("click", function Del() {
      row.remove();
    });

    row.querySelector(".edit-btn").addEventListener("click", function Edit() {
      let newFName = prompt("Edit First Name:", row.cells[0].innerText);
      let newLName = prompt("Edit Last Name:", row.cells[1].innerText);
      let newFaName = prompt("Edit Father Name:", row.cells[2].innerText);
      let newEmail = prompt("Edit Email:", row.cells[3].innerText);

      row.cells[0].innerText = newFName;
      row.cells[1].innerText = newLName;
      row.cells[2].innerText = newFaName;
      row.cells[3].innerText = newEmail;
    });
  } else {
    alert("Please fill all fields");
  }
});
