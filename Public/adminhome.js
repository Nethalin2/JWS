const info = document.getElementById("info")
const info2 = document.getElementById("info2")
const info3 = document.getElementById("info3")
const info4 = document.getElementById("info4")
const info5 = document.getElementById("info5")
const info6 = document.getElementById("info6")
const info7 = document.getElementById("info7")
const info8 = document.getElementById("info8")
const info9 = document.getElementById("info9")
const info10 = document.getElementById("info10")

let button = document.getElementById("editbutton");
let button2 = document.getElementById("cancelbutton");
let input = document.getElementById("inp");
let input2 = document.getElementById("inp2")
let input3 = document.getElementById("inp3");


const getAdmin = async () => {

    fetch(`http://localhost:3001/adminInfo`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.data[0].bookingDate == null) {
            info.innerHTML = ""
            } else {
            info.innerHTML = `${data.data[0].firstName} ${data.data[0].lastName}: ${data.data[0].email}, ${data.data[0].houseNo}, ${data.data[0].address}, ${data.data[0].city}, ${data.data[0].postcode}, ${data.data[0].phoneNumber},${data.data[0].windowType}, ${data.data[0].bookingDate.substring(0, 10)},${data.data[0].bookingTime}, Surveyor ID:  ${data.data[0].surveyorID}, Customer ID: ${data.data[0].id}`
            }

            if(data.data[1].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info2.innerHTML = `${data.data[1].firstName} ${data.data[1].lastName}: ${data.data[1].email}, ${data.data[1].houseNo}, ${data.data[1].address}, ${data.data[1].city}, ${data.data[1].postcode}, ${data.data[1].phoneNumber},${data.data[1].windowType}, ${data.data[1].bookingDate.substring(0, 10)},${data.data[1].bookingTime}, Surveyor ID:  ${data.data[1].surveyorID}, Customer ID:  ${data.data[1].id} `
            }

            if(data.data[2].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info3.innerHTML = `${data.data[2].firstName} ${data.data[2].lastName}: ${data.data[2].email}, ${data.data[2].houseNo}, ${data.data[2].address}, ${data.data[2].city}, ${data.data[2].postcode}, ${data.data[2].phoneNumber},${data.data[2].windowType}, ${data.data[2].bookingDate.substring(0, 10)},${data.data[2].bookingTime}, Surveyor ID:  ${data.data[2].surveyorID}, Customer ID:  ${data.data[2].id}`
            }

            if(data.data[3].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info4.innerHTML = `${data.data[3].firstName} ${data.data[3].lastName}: ${data.data[3].email}, ${data.data[3].houseNo}, ${data.data[3].address}, ${data.data[3].city}, ${data.data[3].postcode}, ${data.data[3].phoneNumber},${data.data[3].windowType}, ${data.data[3].bookingDate.substring(0, 10)},${data.data[3].bookingTime}, Surveyor ID:  ${data.data[3].surveyorID}, Customer ID:  ${data.data[3].id}`
            }

            if(data.data[4].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info5.innerHTML = `${data.data[4].firstName} ${data.data[4].lastName}: ${data.data[4].email}, ${data.data[4].houseNo}, ${data.data[4].address}, ${data.data[4].city}, ${data.data[4].postcode}, ${data.data[4].phoneNumber},${data.data[4].windowType}, ${data.data[4].bookingDate.substring(0, 10)},${data.data[4].bookingTime}, Surveyor ID:  ${data.data[4].surveyorID}, Customer ID:  ${data.data[4].id}`
            }

            if(data.data[5].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info6.innerHTML = `${data.data[5].firstName} ${data.data[5].lastName}: ${data.data[5].email}, ${data.data[5].houseNo}, ${data.data[5].address}, ${data.data[5].city}, ${data.data[5].postcode}, ${data.data[5].phoneNumber},${data.data[5].windowType}, ${data.data[5].bookingDate.substring(0, 10)},${data.data[5].bookingTime}, Surveyor ID:  ${data.data[5].surveyorID}, Customer ID:  ${data.data[5].id}`
            }

            if(data.data[6].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info7.innerHTML = `${data.data[6].firstName} ${data.data[6].lastName}: ${data.data[6].email}, ${data.data[6].houseNo}, ${data.data[6].address}, ${data.data[6].city}, ${data.data[6].postcode}, ${data.data[6].phoneNumber},${data.data[6].windowType}, ${data.data[6].bookingDate.substring(0, 10)},${data.data[6].bookingTime},Surveyor ID:  ${data.data[6].surveyorID}, Customer ID:   ${data.data[6].id}`
            }

            if(data.data[7].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info8.innerHTML = `${data.data[7].firstName} ${data.data[7].lastName}: ${data.data[7].email}, ${data.data[7].houseNo}, ${data.data[7].address}, ${data.data[7].city}, ${data.data[7].postcode}, ${data.data[7].phoneNumber},${data.data[7].windowType}, ${data.data[7].bookingDate.substring(0, 10)},${data.data[7].bookingTime}, Surveyor ID:  ${data.data[7].surveyorID}, Customer ID:  ${data.data[7].id}`
            }

            if(data.data[0].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info9.innerHTML = `${data.data[8].firstName} ${data.data[8].lastName}: ${data.data[8].email}, ${data.data[8].houseNo}, ${data.data[8].address}, ${data.data[8].city}, ${data.data[8].postcode}, ${data.data[8].phoneNumber},${data.data[8].windowType}, ${data.data[8].bookingDate.substring(0, 10)},${data.data[8].bookingTime}, Surveyor ID:  ${data.data[8].surveyorID}, Customer ID:  ${data.data[8].id}`
            }

            if(data.data[0].bookingDate == null) {
                info.innerHTML = ""
            } else {
            info10.innerHTML = `${data.data[9].firstName} ${data.data[9].lastName}: ${data.data[9].email}, ${data.data[9].houseNo}, ${data.data[9].address}, ${data.data[9].city}, ${data.data[9].postcode}, ${data.data[9].phoneNumber},${data.data[9].windowType}, ${data.data[9].bookingDate.substring(0, 10)},${data.data[9].bookingTime}, Surveyor ID:  ${data.data[9].surveyorID}, Customer ID:  ${data.data[9].id}`
            }
        })

}
getAdmin()

button.addEventListener("click", () => {
    console.log("Start of function")

  fetch("http://localhost:3001/update", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      bookingDate: input.value,
      bookingTime: input2.value,
      id: input3.value
    })
})
location.reload()
})

button2.addEventListener("click", () => {
    console.log("Start of function")
    

  fetch("http://localhost:3001/cancel", {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
        id: input3.value
    })
})
location.reload()
})