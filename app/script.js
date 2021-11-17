const toggle = document.querySelector("#toggle")



toggle.addEventListener('change', () => {
    if (toggle.checked === true) {
        document.documentElement.setAttribute('data-theme', 'light')
    }else{
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})    
