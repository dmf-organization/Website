import fs from 'fs';
import path from 'path';

const inDir = './temp-screens';
const outDir = './src/pages';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(inDir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const content = fs.readFileSync(path.join(inDir, file), 'utf8');
    
    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyCode = bodyMatch ? bodyMatch[1] : '';

    // Convert HTML to JSX
    bodyCode = bodyCode.replace(/class="/g, 'className="');
    bodyCode = bodyCode.replace(/for="/g, 'htmlFor="');
    bodyCode = bodyCode.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    
    // Self close tags if they aren't
    bodyCode = bodyCode.replace(/<br>/g, '<br />');
    bodyCode = bodyCode.replace(/<img([^>]*)>/g, (m, p1) => {
        if (p1.trim().endsWith('/')) return m;
        return `<img${p1} />`;
    });
    bodyCode = bodyCode.replace(/<input([^>]*)>/g, (m, p1) => {
        if (p1.trim().endsWith('/')) return m;
        return `<input${p1} />`;
    });
    // Replace SVG stroke-width to strokeWidth, stroke-linecap to strokeLinecap, stroke-linejoin to strokeLinejoin if any exists
    bodyCode = bodyCode.replace(/stroke-width="/g, 'strokeWidth="');
    bodyCode = bodyCode.replace(/stroke-linecap="/g, 'strokeLinecap="');
    bodyCode = bodyCode.replace(/stroke-linejoin="/g, 'strokeLinejoin="');

    const componentName = file.charAt(0).toUpperCase() + file.slice(1, file.lastIndexOf('.'));
    
    const jsxContent = `import React from 'react';\n\nexport default function ${componentName}() {\n  return (\n    <div>\n      ${bodyCode}\n    </div>\n  );\n}\n`;

    fs.writeFileSync(path.join(outDir, `${componentName}.jsx`), jsxContent);
    console.log(`Created ${componentName}.jsx`);
}
