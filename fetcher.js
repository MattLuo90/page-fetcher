const args = process.argv.slice(2);
const request = require('request');
const sizeof = require('object-sizeof')
const fs = require('fs')

 const fetcher = (args) => {
  request(args[0], (error,response,body) => {
    // console.log("response", response);
    fs.writeFile(args[1], body, (error) => {
      if (error) {
        return console.log(error)
      } 
        console.log(`Downloaded and saved ${sizeof(body)} bytes to ${args[1]}`)
    })
  })
}
fetcher(args);  

