import url from 'url';
import express from 'express';
import karmaForUser from './KarmaForUser';

let app = express();

app.get('/redditUser', (req, res) => {
  const name = req.query.name;
  if (name) {
    karmaForUser(name, result => res.end(result));
  } else {
    res.end("name not specified");
  }
});

app.use((req, res, next) => res.status(404).send('404'));

app.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
