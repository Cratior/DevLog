const projects = [
    {
      title: 'Project 1',
      imgSrc: './Placeholder.png',
      description: 'Started working on Project 1 today. Set up the basic file structure and installed necessary dependencies. Tomorrow I\'ll start writing the first features.',
      date: 'March 25, 2023',
      link: '#'
    },
    {
      title: 'Project 2',
      imgSrc: './Placeholder.png',
      description: 'Started working on Project 2 today. Set up the basic file structure and installed necessary dependencies. Tomorrow I\'ll start writing the first features.',
      date: 'March 24, 2023',
      link: '#'
    },
    {
      title: 'Project 3',
      imgSrc: './Placeholder.png',
      description: 'Started working on Project 3 today. Set up the basic file structure and installed necessary dependencies. Tomorrow I\'ll start writing the first features.',
      date: 'March 23, 2023',
      link: '#'
    }
  ];
  
  const cardGrid = document.getElementById('card-grid');
  
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    const card = document.createElement('div');
    card.classList.add('card');
    
    const img = document.createElement('img');
    img.setAttribute('src', project.imgSrc);
    img.setAttribute('alt', `${project.title} Screenshot`);
    card.appendChild(img);
    
    const h2 = document.createElement('h2');
    h2.textContent = project.title;
    card.appendChild(h2);
    
    const p = document.createElement('p');
  }
