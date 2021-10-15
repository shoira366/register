
let pageCount = 1

//List
let elList = document.querySelector('#list')
let elTemplate = document.querySelector('#template').content

function renderUsers(arr, element){
    element.innerHTML = null
    arr.forEach(user =>{
        const cloneTemplate = elTemplate.cloneNode(true);
        
        // console.log(kimdir)
        
        let elImg = cloneTemplate.querySelector('.img')
        elImg.setAttribute('src', user.avatar)
        let elName = cloneTemplate.querySelector('.name')
        elName.textContent = user.first_name
        let elSurname = cloneTemplate.querySelector('.surname')
        elSurname.textContent = user.last_name
        let elLink = cloneTemplate.querySelector('.email')
        elLink.textContent = user.email
        elLink.setAttribute('href', 'mailto:' + user.email)
        
        element.appendChild(cloneTemplate)
        
    })
}

//buttons

// let first = document.querySelector('.second')
// first.addEventListener('click', ()=>{
//     async function fetchUsers(){
//         let res = await fetch('https://reqres.in/api/users?page=2')
//         let data = await res.json()
//         console.log(data.data)
//         renderUsers(data.data, elList)
//     }
//     fetchUsers()
//     // let res = await fetch('https://reqres.in/api/users?page=2')
//     // let data = await res.json()
// })

if(pageCount<=1){
    first.disabled = true
    first.classList.add('disabled')
}

second.addEventListener('click', ()=>{
    pageCount++
    if(pageCount > 1){
        first.classList.remove('disabled')
        first.disabled = false
        second.classList.add('disabled')
    }
    // first.disabled = false
    // second.disabled = true
    // prev.classList.remove('disabled')
    // second.classList.add('disabled')
    fetchUsers()
})
first.addEventListener('click', ()=>{
    pageCount--
    if(pageCount <=1){
        first.classList.add('disabled')
        first.disabled = true
        second.classList.remove('disabled')
    }
    // first.disabled = true
    // second.disabled = false
    // first.classList.remove('disabled')
    fetchUsers()
   
})


async function fetchUsers(){
    let res = await fetch(`https://reqres.in/api/users?page=${pageCount}`)
    let data = await res.json()
    console.log(data.data)
    renderUsers(data.data, elList)
}
fetchUsers()

let signOut = document.querySelector('#signout')

const tooken = JSON.parse(window.localStorage.getItem('_took_login_'))

// console.log(tooken.token)


if(!tooken?.token){
    window.location.replace('login.html')
}

signOut.addEventListener('click', (e) =>{
    window.localStorage.removeItem('_took_login_')
    location.reload()
})