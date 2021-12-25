const form = document.forms.numberForm 


window.onload = () => {
  if (localStorage.getItem('websites') == null ){
  localStorage.setItem('websites', '[]')
}
  const input = document.querySelector('#input')
  input.focus();
  const section = document.querySelector('.websites')
  const websites = JSON.parse(localStorage.getItem('websites'))
  websites.forEach(website => {
    let site = document.createElement('span')
    let siteName = document.createElement('p')
    let pass = document.createElement('p')
    siteName.textContent = `${website.siteName}`
    pass.textContent = `${website.passValue}`
    site.appendChild(siteName)
    site.appendChild(pass)
    section.appendChild(site)
  });
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
    generated.textContent = "Password can't be generated . Value too much"
    return false
  }
  else {
    document.getElementById('copy-button').style.display = 'block';
    document.getElementById('save-btn').style.display = 'block'
    generated.textContent = ''
    var passwords = []
    passVal.value = password
    passwords.push(password)
    console.log(passwords) 
    let siteName = document.createElement('input')
    siteName.setAttribute('id', 'site-name')
    siteName.setAttribute('placeholder', 'The name of your site')
    generated.appendChild(siteName)
    siteName.focus()
  }
}
const copyBtn = document.querySelector("#copy-button")
copyBtn.addEventListener("click",function(){
  let passVal = document.querySelector("#pass-value")
  passVal.select()
  document.execCommand('copy')
  alert("copied")
})

//Function saves password to localstorage
const savePass = () => {
  let passValue = document.querySelector("#pass-value").value
  let siteName = document.querySelector('#site-name').value
  let storedWebsites = localStorage.getItem('websites')
  let stored = JSON.parse(storedWebsites)
  let websites = []
  console.log(passValue, siteName)
  let obj = {
    passValue,
    siteName
  }
  websites.push(obj, ...stored)
  console.log(websites)
  localStorage.setItem('websites', JSON.stringify(websites))
  alert('password saved')
  location.reload()
}
const saveBtn = document.querySelector('#save-btn')
saveBtn.addEventListener('click',savePass)