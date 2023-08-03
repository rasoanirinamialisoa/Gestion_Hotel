function scrollToMenu() {
    const menu = document.querySelector('.menu');
    const menuTop = menu.getBoundingClientRect().top;
    const scrollDistance = menuTop + window.pageYOffset;
  
    window.scroll({
      top: scrollDistance,
      behavior: 'smooth'
    });
  }
  