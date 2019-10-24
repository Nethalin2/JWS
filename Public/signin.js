const inputEmail = document.getElementById("inp")
const inputPassword = document.getElementById("inp2")
const signIn = document.getElementById("signinbutton")

signIn.addEventListener('click', async () => {
    
    // console.log("Sign in works")
    // let response = await fetch(`http://localhost:3001/pull?email=${inputEmail.value}&password=${inputPassword.value}`,{mode: "no-cors"});
    // let data = await response.json();
    // console.log(data)
    // if (data){
    //     location.pathname ='/homepage.html'
    //     console.log("sign in correct")
    // } else {
    //     console.log("Wrong sign in")
    // }

    fetch(`http://localhost:3001/pull?email=${inputEmail.value}&password=${inputPassword.value}`,{mode: "no-cors"})
        .then(res => res.json())
        .then(data => {
            console.log('signed in')
            localStorage.setItem('users_id', data.id)
            location.pathname = '/homepage.html'
        })
        .catch(err => {
            document.getElementById('error').innerHTML = "Password or email incorrect"
        })
        
});
