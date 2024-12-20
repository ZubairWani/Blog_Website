const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    
    
    //lodash
    const num = _.random(0,20);
    console.log(num);
    
    const greet = _.once(()=>{
        console.log('hello')
    })
    
    greet(); //it call will be executed
    greet(); //this call will not be executed as we can call the greet function only once
    
    // console.log('Request Made')
    console.log(req.url, req.method)


    //set header content type

    //when we want to send plain text as response
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('hello, ninjas');
    // res.end();

    //when we want to send html as response
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<p> hello, ninjas </p>');
    // res.end();


    //when sending a whole html file
    res.setHeader('Content-Type', 'text/html');

    let path = './Views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', ('/about'))
            res.end();
            break;
            
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    //Sending an Html file in response by reading and writing it 
    fs.readFile(path, (err, data) => {

        try {
            res.write(data)
            res.end();
        } catch (error) {
            console.log(error)
        }

        // if (err) {
        //     console.log(err)
        // } else{
        //     res.write(data);
        //     res.end();
        // }
    })

})

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
})