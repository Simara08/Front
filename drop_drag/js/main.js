let dropElement = document.querySelector(".main");
let table = document.querySelector(".table");
let upload = document.querySelector(".icon");
let input = document.querySelector("input");
let remove = document.querySelector(".button");
// let xmark=document.querySelector(".mark");

if (document.getElementById("tbody").innerText.length == 0) {
    document.getElementById("table").style.visibility = "hidden";
    document.getElementById("removeall").style.visibility = "hidden";
}

var real_counter = 1;

function DeleteRow(button) {
    var p=button.parentNode.parentNode;
        p.parentNode.removeChild(p);
        if (document.getElementById("tbody").innerText.length == 0) {
            document.getElementById("table").style.visibility = "hidden";
        document.getElementById("removeall").style.visibility = "hidden";
        }
        real_counter = 0;
        let rows = document.querySelectorAll(".rowa");
        [...rows].forEach(row => {
            real_counter++;
            row.innerText = real_counter;
        });
        counter--;
   }

   function DeleteAll() {
    document.querySelector("#tbody").innerHTML = "";
    if (document.getElementById("tbody").innerText.length == 0) {
        document.getElementById("table").style.visibility = "hidden";
        document.getElementById("removeall").style.visibility = "hidden";
    }
    counter = 1;
    real_counter = 1;
   }

upload.onclick = function () {
    input.click();
}
input.onchange = function (e) {
    upoladimage(e.target.files);
}

dropElement.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    dropElement.classList.add("active");
    dragText.textContent = "Release to Upload File";
  });
// console.log(table.lastElementChild);
dropElement.ondragover = function (e) {
    e.preventDefault();
}


let count = 1;
dropElement.ondrop = function (e) {
    e.preventDefault();
    upoladimage(e.dataTransfer.files);
}

function upoladimage(files) {
    [...files].forEach(file => {
        let reader = new FileReader();
        reader.onloadend = function (e) {
            // console.log(e.target);
            // console.log(file.name);
            // console.log(file.size);
            // console.log(e.target.result);
            let tr = `<tr>
        <th scope="row">${count++}</th>
        <td>
            <img src="${e.target.result}" alt="image" width="200px">
        </td>
        <td>${file.name}</td>
        <td>${file.size}</td>
        <td><i class="fa-solid fa-xmark mark"></i><td>
                </tr>`

            table.lastElementChild.innerHTML += tr;

        }
        reader.readAsDataURL(file);

    })

}