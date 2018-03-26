const express = require('express');
const path = require('path');
const Twitter = require('twitter');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

var client = new Twitter({
  consumer_key: 'yEpKcvEkCLuZKPAEr6d8JXit4',
  consumer_secret: 'DIm2JpdcalPhq99GwtG44etMqMwWTCInFulWv07KcbJcephN7F',
  access_token_key: '2377152822-PXTAkajKBn1964xFSaqkvHWtZs9CtyBTJp4uPvZ',
  access_token_secret: '3rh4OkkG66zw4CdXoPoREeUNcsSkCisX0XMeTQ0PRRu8q'
});

app.use(bodyParser.json());

app.post("/api/input", function(request, response) {
  let inputValue = request.body.inputValue;
  if (!inputValue) {
    return response.status(400).send({ error: true, message: 'Please provide username' });
  }

  client.get('/statuses/user_timeline', {screen_name: inputValue, count: 21}, function(error, tweets) {
    return response.send({express: tweets});
  });
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error('Listening on port ${PORT}');
});
