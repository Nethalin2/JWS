const info = document.getElementById("info");

fetch("http://localhost:3001/data")
  .then(response => response.json())
  .then(data => {
    info.textContent = data.data;
  });

let button = document.getElementById("submit");
let input = document.getElementById("inp");
let input2 = document.getElementById("inp2")
let input3 = document.getElementById("inp3")
let input4 = document.getElementById("inp4")
let input5 = document.getElementById("inp5")
let input6 = document.getElementById("inp6")
let input7 = document.getElementById("inp7")
let input8 = document.getElementById("inp8")
let input9 = document.getElementById("inp9")
let input10 = document.getElementById("inp10")
let input11 = document.getElementById("inp11")
let input12 = document.getElementById("inp12")



button.addEventListener("click", () => {
    console.log("Start of function")
  fetch("http://localhost:3001/register", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      email: input.value,
      password: input2.value,
      firstName: input3.value,
      lastName: input4.value,
      houseNo: input5.value,
      address: input6.value,
      city: input7.value,
      postcode: input8.value,
      phoneNumber: input9.value,
      windowType: input10.value,
      bookingDate: input11.value,
      bookingTime: input12.value
    


    })
    
  });
  console.log("I work")
  location.reload();
});

input.addEventListener("keyup", () => {
  if (event.keyCode == 13) {
    button.click();
  }
});