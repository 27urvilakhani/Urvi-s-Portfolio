
  // Cursor dot
  const dot = document.getElementById('cursorDot');
  document.addEventListener('mousemove', e => {
    dot.style.left = (e.clientX - 3) + 'px';
    dot.style.top = (e.clientY - 3) + 'px';
  });
 
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(r => obs.observe(r));
 
  // Terminal
  const output = document.getElementById('termOutput');
  const input = document.getElementById('termInput');
 
  const responses = {
    help: `Available commands:
  about     → who I am
  skills    → what I know
  projects  → what I've built
  contact   → how to reach me
  joke      → a dev joke
  hire      → let's talk!
  clear     → clear screen`,
 
    about: `Name     : Urvi Lakhani
Role     : Full Stack Developer
College  : Chandrabhan Sharma College, Mumbai
Degree   : B.Sc. IT | CGPA: 8.27 / 10
Status   : Open to internships & collabs!`,
 
    skills: `Languages   : JavaScript (ES6+), HTML5, CSS3
Frontend    : DOM, Fetch API, Responsive Design
Backend     : Node.js, Express.js, RESTful APIs
Database    : MongoDB, CRUD, JSON
Tools       : Git, GitHub, Postman, VS Code`,
 
    projects: `[ 001 ] Expense Tracker   — Node.js + Express + MongoDB
[ 002 ] Smart Notes       — Vanilla JS + Local Storage
[ 003 ] Personal Portfolio — HTML + CSS + JS (you're here!)`,
 
    contact: `✉  lakhaniurvi38@gmail.com
☎  +91 9324696674
</>  github.com/urvilakhani
in   linkedin.com/in/urvilakhani`,
 
    joke: `Why do developers prefer dark mode?
Because light attracts bugs. 🐛`,
 
    hire: `Excellent choice! 🎉
Shoot me an email: lakhaniurvi38@gmail.com
or scroll up to the Contact section.
I respond fast — I promise!`,
  };
 
  function processCommand(cmd) {
    const c = cmd.trim().toLowerCase();
    if (!c) return;
 
    if (c === 'clear') {
      output.innerHTML = '';
      return;
    }
 
    const res = responses[c];
    const color = res ? 'var(--mint)' : 'var(--lavender)';
    const text = res || `command not found: "${cmd}"\nType "help" for available commands.`;
 
    output.innerHTML += `<span style="color:var(--muted)">urvi@portfolio:~$ ${escHtml(cmd)}</span>\n<span style="color:${color}">${escHtml(text)}</span>\n\n`;
    output.scrollTop = output.scrollHeight;
  }
 
  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
 
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      processCommand(input.value);
      input.value = '';
    }
  });
