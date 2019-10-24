const inputEmail = document.getElementById("inp")
const inputPassword = document.getElementById("inp2")
const signIn = document.getElementById("signinbutton")

signIn.addEventListener('click', async () => {
    console.log("Sign in button works")
    fetch(`http://localhost:3001/adminlogin?email=${inputEmail.value}&password=${inputPassword.value}`,{mode: "no-cors"})
        .then(res => res.json())
        .then(data => {
            console.log('signed in')
            localStorage.setItem('users_id', data.id)
            location.pathname = '/adminhome.html'
        })
        .catch(err => {
            document.getElementById('error').innerHTML = "Password or email incorrect"
        })
        
});
