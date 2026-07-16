const skills = [
  ['u1','languages','c++',5],
  ['u2','languages','c (arduino / embedded)',4],
  ['c1','core concepts','file handling & i/o streams',4],
  ['r1','hardware','esp32 microcontroller programming',4],
  ['r2','hardware','digital logic circuit design',4],
  ['r4','hardware','general hardware tinkering',5],
  ['t1','tools','arduino ide',4],
  ['t2','tools','git / github',4],
  ['t3','tools','ms office (word specialist cert)',5],
];

const bomBody = document.getElementById('bom-body');
skills.forEach(([ref, cat, item, level]) => {
  const row = document.createElement('tr');
  const dots = Array.from({length:5}, (_, i) => `<span class="${i < level ? 'on' : ''}"></span>`).join('');
  row.innerHTML = `
    <td data-label="ref">${ref}</td>
    <td data-label="category">${cat}</td>
    <td data-label="item">${item}</td>
    <td data-label="level"><div class="level">${dots}</div></td>
  `;
  bomBody.appendChild(row);
});

const projects = [
  {
    no: 'sheet 04.1',
    title: 'bise lahore result gazette search tool',
    desc: 'c++ file-handling program that parses the official BISE Lahore 11th class result gazette (2024) into a structured, searchable format. processes roughly 94,000 student records for fast lookup by name or roll number, instead of manual page-by-page searching.',
    tags: ['c++', 'ifstream / ofstream', 'file handling'],
  },
  {
    no: 'sheet 04.2',
    title: 'esp32 invoice generator & local web server',
    desc: 'esp32-based system that generates invoices and serves an interactive web page over the local wifi network for Quality Pipe Store, a family construction-supply business — replacing manual handwritten invoicing with a browser-accessible digital workflow.',
    tags: ['esp32', 'embedded c++', 'arduino', 'local web server'],
  },
  {
    no: 'sheet 04.3',
    title: 'bank management system simulation',
    desc: 'c++ simulation of core atm and bank management operations, including account handling and transaction processing. built using arrays, pointers, dynamic memory allocation, function overloading and file handling to persist data between sessions.',
    tags: ['c++', 'pointers', 'file handling'],
  },
];

const grid = document.getElementById('projects-grid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card reveal';
  card.innerHTML = `
    <span class="project-sheet-no">${p.no}</span>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="tagrow">${p.tags.map(t => `<span class="techtag">${t}</span>`).join('')}</div>
  `;
  grid.appendChild(card);
});

document.querySelectorAll('.about-text, .about-meta, .bom, .timeline, .cert-row, .contact-grid').forEach(el => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const tracepath = document.getElementById('tracepath');
if (tracepath) {
  const len = tracepath.getTotalLength();
  tracepath.style.strokeDasharray = `${len}`;
  tracepath.style.strokeDashoffset = `${len}`;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    const ratio = Math.min(scrolled / max, 1);
    tracepath.style.strokeDashoffset = `${len - len * ratio}`;
  });
}
