const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('Witaj na naszej stronie glownej');
        return
    }
    if(req.url == '/about'){
        res.end('Jest to testowa strona');
        return
    }
    if(req.url == '/contact'){
        res.end('Kontakt: mati1706');
        return
    }
    res.end(`
    <h1>Zabladziles gdzies?</h1>
    <p>nie ma takiej strony :/</p>
    <a href="/">wracaj do domu</a>
    `)
    return


})

server.listen(5000)