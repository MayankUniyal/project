import * as express from 'express';
import * as request from 'request';
import * as cors from 'cors';
const app = express();
// app.use(cors);


function makeAPICall(url){
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
          if (err) reject(err)
          resolve(body)
        });
    })
}



app.get('/getApiResponse', (request, response) => {
    //   response.send('Hello world!');
    makeAPICall('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            response.send(res);
        })
});


app.listen(5000);

