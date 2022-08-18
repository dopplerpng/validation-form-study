const form = document.querySelector('form')
const user = document.querySelector('#username')
const pwd = document.querySelector('#password')

form.addEventListener("submit", e =>{
    e.preventDefault()
    checkedInputs()
})

    

function checkedInputs(){
    const userValue = user.value.trim()
    const pwdValue = pwd.value.trim()  
    
    validationPath(userValue)
    validationPath(pwdValue)
}

function validationPath(input){

    if(input === ""){
        console.log('vazio')
    }else{ 
        console.log('okay')
       
}
}
