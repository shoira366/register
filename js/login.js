let elForm = document.querySelector('#form')
let elEmail = elForm.querySelector('#email')
let elPassword = elForm.querySelector('#password')



elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    let emailValue = elEmail.value.trim()
    let passwordValue = elPassword.value.trim()
    
    
    async function renderLogin(){
        const res = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailValue,
            password: passwordValue
            
        })
    })
    const data = await res.json()
   if(data){
    window.localStorage.setItem('_took_login_', JSON.stringify(data))
    window.location.replace('index.html')
   }
    // console.log(data)
}

renderLogin()

})