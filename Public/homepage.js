let idStore = localStorage.getItem('users_id')
const info = document.getElementById("info")
let button = document.getElementById("editbutton");
let button2 = document.getElementById("cancelbutton");
let input = document.getElementById("inp");
let input2 = document.getElementById("inp2")

const getInfo = async () => {

    fetch(`http://localhost:3001/info?id=${idStore}`)
        .then(res => res.json())
        .then(data => {
            if (data[0].bookingDate == null && data[0].bookingTime == null) {
                info.innerHTML = "No survey booked"
            } else {
            info.innerHTML = "Date: " + data[0].bookingDate.substring(0, 10) + " Time: " + data[0].bookingTime
            }
        })

}
getInfo()

button.addEventListener("click", () => {
    console.log("Start of function")
    console.log(idStore)

  fetch("http://localhost:3001/update", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      bookingDate: input.value,
      bookingTime: input2.value,
      id: idStore
    })
})
location.reload()
})

button2.addEventListener("click", () => {
    console.log("Start of function")
    console.log(idStore)

  fetch("http://localhost:3001/cancel", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      id: idStore
    })
})
location.reload()
})



