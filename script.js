const skills = [
  ['u1','languages','c++',5],
  ['u2','languages','python',4],
  ['u3','languages','javascript',3],
  ['u4','security','digital logic design',4],
  ['u5','security','network fundamentals',3],
  ['r1','tools','sqlite',4],
  ['r2','tools','tkinter',4],
  ['r3','tools','git / github',4],
  ['r4','hardware','esp32 / arduino',4],
  ['r5','hardware','kicad',3],
  ['c1','office','ms word (specialist cert)',5],
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
    title: 'quality pipes — invoicing & inventory system',
    desc: 'local desktop app for a scaffolding pipe supply business — inventory, invoicing, rent billing, expenditure tracking and analytics, with pixel-accurate pdf invoice generation.',
    tags: ['python', 'tkinter', 'sqlite', 'pdf generation'],
  },
  {
    no: 'sheet 04.2',
    title: 'bise lahore gazette search tool',
    desc: 'fast lookup tool for searching across 94,000+ gazette records, built for speed and reliability over a large dataset.',
    tags: ['c++'],
  },
  {
    no: 'sheet 04.3',
    title: 'esp32 invoice web server',
    desc: 'embedded web server on esp32 for generating and serving invoices, including full wiring schematic and library documentation.',
    tags: ['esp32', 'arduino', 'embedded'],
  },
  {
    no: 'sheet 04.4',
    title: 'bank management system',
    desc: 'c++ lab project simulating core banking operations — accounts, transactions and file-based record storage.',
    tags: ['c++', 'file handling'],
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
