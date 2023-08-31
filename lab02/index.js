//load the http module
const http = require('http');

//set hostname and port
const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) =>{
    //1. Tell the  browser everything is OK 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    //2. Write the announced text to the body of page
    // res.write('Hello World');

    let name = "Panachat Aiamnam"
    let phone = "0644561415"

    // function readphonenumber(){
    //     let numberPhone = phone
    //     let arr = [];
    //     for(let i = 0; i < numberPhone.length; i++){
    //         if(numberPhone[i] === "0"){
    //             arr += 'zero ';
    //         }else if(numberPhone[i] === "1"){
    //             arr += 'one ';
    //         }else if(numberPhone[i] === "2"){
    //             arr += 'two ';
    //         }else if(numberPhone[i] === "3"){
    //             arr += 'three ';
    //         }else if(numberPhone[i] === "4"){
    //             arr += 'four ';
    //         }else if(numberPhone[i] === "5"){
    //             arr += 'five ';
    //         }else if(numberPhone[i] === "6"){
    //             arr += 'six ';
    //         }else if(numberPhone[i] === "7"){
    //             arr += 'seven ';
    //         }else if(numberPhone[i] === "8"){
    //             arr += 'eight ';
    //         }else if(numberPhone[i] === "9"){
    //             arr += 'nine ';
    //         }
    //     }
    //     return arr;
     
    // }

    function readphonenumber(phone){
        let word = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
        let result = []
        let splitNumber = phone.split("")
        for(x of splitNumber){
            result.push(word[x])
        }return result
    }



    // function readphonenumber(phone){
    //     let word = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
    //     let arr = ''
    //     let text = phone.split('');
    //     text.forEach(element => {
    //         arr += word[element]+" "
    //     });
    //     return arr
    // }
    

    res.write('<h1>Phone number is'+ phone +'or ' + readphonenumber(phone) +'</h1>');
    

    for (let num = 0; num < 10; num++){
        if(num % 2 == 0){
            res.write('<h2>['+ num +'] Name: </h2>'+ name +'<h1>Phone:</h1> ' + phone);
        }else{
            res.write('<h6>['+ num +'] Name: </h6>'+ name +'<h1>Phone:</h1> ' + phone);
        }

    }
    
    // for(let num = 0; num < 10; ){

    //     res.write('<h2>['+ num +'] Name: </h2>'+ name +'<h1>Phone:</h1> ' + phone);
    //     num++
    //     res.write('<h6>['+ num +'] Name: </h6>'+ name +'<h1>Phone:</h1> ' + phone);
    //     num++
    // }



    //3. Tell the server that all of the response   headers and body have been sent
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

