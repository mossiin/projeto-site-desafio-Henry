function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


document.getElementById("hub-login").addEventListener("click", function(){
  var login = document.getElementById("hub-login");
  if(menu.style.display === 'none' || menu.style.display === "");{
    menu.style.display = "block";
    this.textContent = "HiddenMenu"
  }
  
    else{
      menu.style.display ="none";
      this.textContent = "Mostrar Menu";
    }
})

