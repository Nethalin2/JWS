let button = document.getElementById("submit");
let input = document.getElementById("inp");
let input2 = document.getElementById("inp2")
let input3 = document.getElementById("inp3");
let input4 = document.getElementById("inp4");
idStore = localStorage.getItem('surveyorID')


button.addEventListener("click", () => {
    console.log("Start of function")
    console.log(idStore)

  fetch("http://localhost:3001/survey", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      windowType: input.value,
      windowSize: input2.value,
      windowsNo: input3.value,
      usersID: input4.value,
      surveyorID : idStore
      
    })
})
location.reload()
})
