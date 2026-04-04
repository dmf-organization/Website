import fs from 'fs';

const files = [
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/pages/Events.jsx',
  'src/pages/Projects.jsx',
  'src/pages/Donate.jsx',
  'src/pages/Missions.jsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/import Navbar from '..\/components\/Navbar';\r?\n/g, '');
    c = c.replace(/[ \t]*<Navbar \/>\r?\n?/g, '');
    c = c.replace(/\{\/\* TopNavBar \*\/}\r?\n?/g, '');
    c = c.replace(/\{\/\* Top NavBar \*\/}\r?\n?/g, '');
    fs.writeFileSync(f, c);
  }
});
