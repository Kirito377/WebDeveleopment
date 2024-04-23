let themeSwitch = document.querySelector(".theme-switch")
let themeSwitchIcon = document.querySelector(".material-symbols-outlined")
function iconSwitch(){
    event.preventDefault()
    if(themeSwitchIcon.innerHTML.trim() == 'clear_day'){
        themeSwitchIcon.innerHTML = 'dark_mode'
    }
    else{
        themeSwitchIcon.innerHTML = 'clear_day'
    }
}