var parentList = document.getElementById("parentList");
var listData = document.getElementById("listData");
var add = document.getElementById("add");
var grandList = document.getElementById("grandList");
var deleteprod = document.getElementById("deleteprod");
var closeAlrt = document.getElementById("closeAlrt");
var contMain = document.getElementById("contMain");

var listOfWork = [];

if (localStorage.userWork != null) {
  listOfWork = JSON.parse(localStorage.getItem("userWork"));
  read();
} else {
  listOfWork = [];
}

//add
add.addEventListener("click", function () {
  if (listData.value == "") {
    contMain.classList.replace("d-none", "d-block");
  } else {
    var data = {
      code: listData.value,
    };
    listOfWork.push(data);
    localStorage.setItem("userWork", JSON.stringify(listOfWork));
    read();
    clear();
  }
});
//close
closeAlrt.addEventListener("click", function () {
  contMain.classList.replace("d-block", "d-none");
});

//clear
function clear() {
  listData.value = null;
}

//read
function read() {
  var cartona = "";
  for (var i = 0; i < listOfWork.length; i++) {
    cartona += `
                  <div id="parentList" class="itemData animate__animated animate__lightSpeedInLeft
                    p-3 d-flex justify-content-center align-items-center mt-5 w-25 m-auto">
                        <label for="inp1" class="me-2 fw-semibold ms-1 text-white">${listOfWork[i].code}</label>
                        <i class="fa-solid fa-trash-can text-white" id="deleteprod" onclick="deleteprodu(${i})"></i>
                    </div>
        
        `;
  }
  document.getElementById("grandList").innerHTML = cartona;
}
//delete
function deleteprodu(index) {
  listOfWork.splice(index, 1);
  localStorage.userWork = JSON.stringify(listOfWork);
  read();
}



// function sayHello(code = "userName" , age = 16 , salary = "unknown"){
//     return `Welcome ${code} your age is ${age} Salary is ${salary}`
// }

// let result = sayHello()
// console.log(result);
