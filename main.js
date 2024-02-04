const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDowmMenu = document.querySelector('.dropdowm_menu')

toggleBtn.onclick = function () {
    dropDowmMenu.classList.toggle('open')
    const isOpen = dropDowmMenu.classList.contains('open')

}

