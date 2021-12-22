const form = document.forms.numberForm 

window.onload = ()=>{
  const input = document.querySelector('#input')
  input.focus()
}
form.onsubmit = function(e){
  e.preventDefault() 
  let input = document.querySelector('input')
  let letters = 'qwertyuiopasdfgh'
  let numbers = '87654321'
  let char = '&q%w\e|rtu<i>{op@a$s_f&g-h+j*zklx?mn!'
  let pass = char + letters + numbers
  var password = ''
  
    const passVal = document.querySelector('#pass-value')
  for(i = 0;i< input.value;i++){
    let str = pass[Math.floor(Math.random() * i + Math.random() * 30)]
      password += str
  }
  const generated = document.querySelector('.generated').firstElementChild

  if(input.value < password.length){
    generated.innerText = "Password can't be generated . Value too much"
    return false
  }
  else{
    generated.innerText = password
    var passwords = []
    passVal.value = password
    passwords.push(password)
    console.log(passwords) 
    let siteName = document.createElement('input')
    siteName.setAttribute('id', 'site-name')
    generated.appendChild(siteName)
  }
}
const copyBtn = document.querySelector("#copy-button")
copyBtn.addEventListener("click",function(){
  let passVal = document.querySelector("#pass-value")
  passVal.select()
  document.execCommand('copy')
  alert("copied")
})
const savePass = ()=>{
  let passValue = document.querySelector("#pass-value").value
  let siteName = document.querySelector('#site-name').value
  let storedPasswords = []
  window.localStorage.setItem("password" , storedPasswords)
  const saved = [...localStorage.getItem('password')]
  let pass = {
    passValue:passValue, 
    siteName:siteName
  }
  saved.push(pass)
window.localStorage.setItem("password", saved)
  let p = Array(localStorage.getItem('password')) 
  console.log(p)
}
const saveBtn = document.querySelector('#save-btn')
saveBtn.addEventListener('click',savePass)