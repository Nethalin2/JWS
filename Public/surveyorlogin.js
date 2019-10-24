const inputEmail = document.getElementById("inp")
const inputPassword = document.getElementById("inp2")
const signIn = document.getElementById("signinbutton")

signIn.addEventListener('click', async () => {
    console.log("Sign in button works")
    fetch(`http://localhost:3001/surveyorlogin?email=${inputEmail.value}&password=${inputPassword.value}`,{mode: "no-cors"})
        .then(res => res.json())
        .then(data => {
            console.log('signed in')
            localStorage.setItem('surveyorID', data.id)
            location.pathname = '/surveyorhome.html'
        })
        .catch(err => {
            document.getElementById('error').innerHTML = "Password or email incorrect"
        })
        
});