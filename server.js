const http = require('http')

const server = http.createServer((req, res) => {
    const { method, url, headers, body } = req;
    console.log(method, url, headers);
    console.log(body);

    res.end()
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
