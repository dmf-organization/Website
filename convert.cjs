const fs = require('fs');

['d.html', 'm.html'].forEach((f, idx) => {
    let c = fs.readFileSync(f, 'utf8');
    let bodyMatch = c.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return;
    
    let content = bodyMatch[1];
    
    // Simple html to jsx transformations
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/for=/g, 'htmlFor=');
    content = content.replace(/<!--[\s\S]*?-->/g, ''); // strip comments
    
    // Close img tags
    content = content.replace(/<img([^>]*?)>/g, (m, p1) => {
        if(p1.trim().endsWith('/')) return m;
        return '<img' + p1 + ' />';
    });
    
    // Close input tags
    content = content.replace(/<input([^>]*?)>/g, (m, p1) => {
        if(p1.trim().endsWith('/')) return m;
        return '<input' + p1 + ' />';
    });
    
    // Handle specific style strings that crashed us earlier
    content = content.replace(/style="([^"]*)"/g, (m, p1) => {
        return "style={{}}"; // Just wipe them out or replace with empty object since they usually are background images that we fixed earlier manually.
    });

    const pName = idx === 0 ? 'Donate' : 'Missions';
    const jsx = `import React from 'react';\nimport Navbar from '../components/Navbar';\n\nexport default function ${pName}() {\n  return (\n    <div>\n      <Navbar />\n      ${content}\n    </div>\n  );\n}\n`;
    
    fs.writeFileSync(`src/pages/${pName}.jsx`, jsx);
});
console.log("Converted pages successfully!");
