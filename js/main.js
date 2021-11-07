let elInput = document.querySelector('.passw');
let elEyeBtn = document.querySelector('.header__password-btn');
let n=0

elEyeBtn.addEventListener('click', ()=>{
  if(n==0){
    elInput.type = "text"
    n=1
    // document.getElementById("eye").className = "bi bi-eye-fill";
  }
  else{
    elInput.type = "password"
    n=0
    // document.getElementById("eye").className = "bi bi-eye-slash-fill";
  }
})

// slide

var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки


window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
           }
       }
    }
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}