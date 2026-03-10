const fs = require('fs');
try {
    const html = fs.readFileSync('index.html', 'utf-8');
    const css = fs.readFileSync('styles.css', 'utf-8');
    const js = fs.readFileSync('app.js', 'utf-8');

    let mainHtml = html.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`);
    mainHtml = mainHtml.replace('<script src="app.js" type="text/babel"></script>', `<script type="text/babel">\n${js}\n</script>`);

    fs.writeFileSync('main.html', mainHtml);
    console.log('Successfully bundled into main.html!');
} catch (error) {
    console.error('Error bundling files:', error);
}
