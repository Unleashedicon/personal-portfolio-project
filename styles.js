document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  const close = document.querySelector('.fa-solid.fa-xmark');
  const bars = document.querySelector('.fa-solid.fa-bars');

  ham.addEventListener('click', () => {
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
        const sectionclass = links[i].getAttribute('href');
        const section = document.querySelector(sectionclass);
        section.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('show');
        bars.style.display = 'block';
        close.style.display = 'none';
      }
    });
  }
});

const project = [
  {
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item1',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item2',
  },
  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item3',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item4',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item5',
  },
  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item6',
  }];

const popupselector = document.querySelector('.grid-column');
for (let i = 0; i < project.length; i += 1) {
  const projectelements = document.createElement('div');
  projectelements.className = project[i].class;
  popupselector.appendChild(projectelements);

  const itemblock = document.createElement('div');
  itemblock.className = 'item-block';
  projectelements.appendChild(itemblock);

  const popupname = document.createElement('h3');
  popupname.textContent = project[i].name;
  itemblock.appendChild(popupname);

  const popupdescription = document.createElement('p');
  popupdescription.textContent = project[i].description;
  itemblock.appendChild(popupdescription);

  const itemnav = document.createElement('nav');
  itemblock.appendChild(itemnav);

  const ultech = document.createElement('ul');
  itemnav.appendChild(ultech);

  project[i].technologies.forEach((technology) => {
    const item = document.createElement('li');
    item.innerText = technology;
    ultech.appendChild(item);
  });
  const button = document.createElement('button');
  button.textContent = 'see project';
  if (projectelements.className === 'item1') {
    button.className = 'item-button1';
  } else {
    button.className = 'item-button';
  }
  button.type = 'button';
  projectelements.appendChild(button);
}
const project2 = [
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'story',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item1',

  },
  {
    name: 'Data Dashboard Healthcare',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item2',
  },
  {
    name: 'Website Protfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item3',
  },
  {
    name: 'Profesional Art Printing Data More',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item4',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item5',
  },
  {
    name: 'Website Protfolio',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: './images/snapshot mobile.png',
    desktopimage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    live: 'https://unleashedicon.github.io/personal-portfolio-project/',
    source: 'https://github.com/Unleashedicon/personal-portfolio-project',
    class: 'item6',
  }];

function showDetails(projectIndex) {
  const projects = project2[projectIndex];

  document.getElementById('project-name').textContent = projects.name;
  document.getElementById('project-description').textContent = projects.description;
  if (window.innerWidth > 768) {
    document.getElementById('project-image').src = projects.desktopimage;
  } else {
    document.getElementById('project-image').src = projects.image;
  }
  document.getElementById('project-live').href = projects.live;
  document.getElementById('project-source').href = projects.source;

  const ultech = document.getElementById('project-technologies');
  ultech.innerHTML = '';

  projects.technologies.forEach((technology) => {
    const item = document.createElement('li');
    item.innerText = technology;
    ultech.appendChild(item);
  });

  document.getElementById('popup-window').style.display = 'block';
}

let buttonclicked = false;
const itemButtons = document.querySelectorAll('.item-button, .item-button1, .story-button');
itemButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttonclicked = true;
    showDetails(index);
  });
});
const closeButton = document.getElementById('close-popup');
closeButton.addEventListener('click', () => {
  document.getElementById('popup-window').style.display = 'none';
});

if (!buttonclicked) {
  document.getElementById('popup-window').style.display = 'none';
}
const form = document.querySelector('form');
const email = document.querySelector("input[type = 'email']");
const errormessage = document.querySelector('#errormessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value.toLowerCase() !== email.value) {
    errormessage.innerHTML = 'The email must be in lower case';
    errormessage.style.display = 'block';
  } else {
    form.submit();
  }
});
