let btn = document.querySelector('.menu');

btn.onclick = function(){
    let isDark =  document.body.classList.toggle('dark');
    if ( isDark) {
          btn.innerHTML = '<i class="fa-solid fa-sun"></i>'
    } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
}