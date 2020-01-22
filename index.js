const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/countries', (request, response) => {
  const countries = axios.get(
   'https://countries.tech-savvy.tech/countries/' 
  ).then(
    (result) => {
      console.log(result.data);
      response.send(result.data);
    }
  ).catch((error)=> {
    console.log(error);
    response.send(error);
  });
  console.log('estou no terminal');
});

app.get('/countries/:countryCode', (request, response) => {
  const { countryCode } = request.params;
  const countries = axios.get(
    `https://countries.tech-savvy.tech/countries/${countryCode}` 
   ).then(
     (result) => {
       console.log(result.data);
       response.send(result.data);
     }
   ).catch((error)=> {
     console.log(error);
     response.send(error);
   });
});

app.listen(4000, () => {
  console.log('APP rodando em http://localhost:4000');
})
