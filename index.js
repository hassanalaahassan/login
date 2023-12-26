
var fullName=document.querySelector('#fnamereg')
var passwordReg=document.querySelector('#passwordreg')
var emailReg=document.querySelector('#emailreg')
var regButton = document.querySelector('#reg')
var submit = document.querySelector('#signin')
var sign = document.querySelector('#signup')
var register = document.querySelector('#register')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var welcome = document.querySelector('.home h2')
var loginPage =  document.querySelector('.login')
var registerPage =  document.querySelector('.register')

var list



if( localStorage.getItem('user') != null )
{

    list = JSON.parse(localStorage.getItem('user'))
}
else{
    list = []
}



//add new user
function addToLocal() 
{
    var user = {
        name : fullName.value,
        pass : passwordReg.value,
        mail : emailReg.value
    }
   
    if(valid()){
    list.push(user)
    localStorage.setItem('user',JSON.stringify(list))
    clear()
    document.querySelector('.register .exist').classList.add('d-none')
    }    
}
// 

// //checked
function valid() {
    var regexemail = /^[a-zA-Z0-9]{3,}(@gmail\.com|@yahoo\.com)$/
    var regexName = /^[A-Z][A-za-z ]{2,}$/
    var regexPass = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
    var warn = document.querySelectorAll('.register span') , done = 0


    if(regexName.test(fullName.value) == false)
    {
        warn[0].classList.remove('d-none')
    }

    else{
        warn[0].classList.add('d-none')

    }

     if(regexemail.test(emailReg.value) == false)
    {
        warn[2].classList.remove('d-none')
    }

    else{
        warn[2].classList.add('d-none')
    }

     if( regexPass.test(passwordReg.value) == false )
    {
        
        passwordReg.value=''
        warn[3].classList.remove('d-none')
    }
    else{
    
        warn[3].classList.add('d-none')
    }


    

    for (let i = 0; i < list.length; i++) {
        done = 0
        if(emailReg.value.toLowerCase() === list[i].mail.toLowerCase()){
            done = 1
            break
        }
        
    }
    if (done === 1) {
        warn[1].classList.remove('d-none')
        emailReg.value=''
    }
    else{
        warn[1].classList.add('d-none')
    }





    
    if( regexName.test(fullName.value) && regexemail.test(emailReg.value) && regexPass.test(passwordReg.value) && done === 0 )
    {
        warn[4].classList.remove('d-none')
        return true
    }
    else{        
        warn[4].classList.add('d-none')
        return false
    }
    


}
// //clear values 
function clear() {

     fullName.value=''
     passwordReg.value=''
     emailReg.value=''
}

 //login

function enter() {
    var mailSign = email.value
    var passwordSign = password.value 


    for (var i = 0; i < list.length; i++) {
        if ( list[i].pass == passwordSign && list[i].mail.toLowerCase() == mailSign.toLowerCase() ) {
            

            document.querySelector('.enter').classList.toggle('d-none')
            document.querySelector('.home').classList.toggle('d-none')
            document.querySelector('nav').classList.toggle('d-none')
            welcome.innerHTML='Welcome '+ list[i].name ;
            flag = 1        
            break
        }  
        else{
          flag = 0

        }     
    }
    if(flag === 0 ){
        document.querySelector('.login span').classList.remove('d-none')
       
    }
}


function swipe() {

    document.querySelector('.enter').classList.toggle('d-none')
    document.querySelector('.home').classList.toggle('d-none')
    document.querySelector('nav').classList.toggle('d-none')
    
    password.value=''
    email.value=''
    
}

