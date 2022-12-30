const ham = document.querySelector(".ham");
const enlaces =document.querySelector(".enlaces");
const barras = document.querySelectorAll(".ham span")
const btnSwitch = document.querySelector('#switch')

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado")
  barras.forEach(child => {
    child.classList.toggle("animado")
  })
})

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  btnSwitch.classList.toggle('active')
});