(function(){
  // elements
  const navbarBtn = document.querySelector('.navbar__btn');
  const navbarContent = document.querySelector('.navbar__content');
  // events
  navbarBtn.addEventListener('click', navbarMenu);
  document.addEventListener('mouseup', navbarMenu);
  navbarContent.addEventListener('mouseup', function(e){e.stopPropagation()});
  navbarBtn.addEventListener('mouseup', function(e){e.stopPropagation()});
  // адаптация меню
  function navbarMenu(e){
    if(e.type == 'click'){
      e.preventDefault();
      if(navbarBtn.classList.contains('active')){
        navbarBtn.classList.remove('active');
        navbarContent.style = `left: -102%; transition: left 0.5s`;
      }else{
        navbarBtn.classList.add('active')
        navbarContent.style = `left: 0%; transition: left 0.5s`;
      }
    }else if(e.type == 'mouseup'){
      e.preventDefault();
      if(e.target != navbarContent || e.target != navbarBtn){
        navbarBtn.classList.remove('active');
        navbarContent.style = `left: -102%; transition: left 0.5s`;
      }
    }
  }
})()
