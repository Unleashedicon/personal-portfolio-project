
  const list = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  const close = document.querySelector('.fa-solid.fa-xmark');
  const bars = document.querySelector('.fa-solid.fa-bars');
});
list.addEventListener('click', () => {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
      bars.style.display = 'none';
      close.style.display = 'block';
    } else {
      bars.style.display = 'block';
      close.style.display = 'none';
    }
  });

  close.addEventListener('click', () => {
    menu.classList.remove('show');
    bars.style.display = 'block';
    close.style.display = 'none';
  });

  const links = menu.querySelectorAll('.nav-menu li a');
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('click', () => {
      if (window.matchMedia('(min-width:375px) and (max-width:768px)').matches) {
        const sectionId = links[i].getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('show');
        bars.style.display = 'block';
        close.style.display = 'none';
      }
    });
  }
