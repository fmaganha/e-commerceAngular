const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  origim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/products').get((request, response) => {
  response.send(PRODUCTS);
});

app.route('/api/offers').get((request, response) => {
  response.send(PRODUCTS.filter(item => item.oferta == true));
});
app.route('/api/products/filter/:min/:max').get((request, response) => {
  let min = request.params['min']
  let max = request.params['max']
  response.send(PRODUCTS.filter(item => item.price >= min && item.price <= max))

});

app.route('/api/products').post((request, response) => {
  let course = request.body;

  const firstId = PRODUCTS ? Math.max.apply(null, PRODUCTS.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  PRODUCTS.push(course);


  response.status(201).send(course);
});
app.route('/api/products').post((request, response) => {
  let course = request.body;

  const firstId = PRODUCTS ? Math.max.apply(null, PRODUCTS.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  PRODUCTS.push(course);


  response.status(201).send(course);
});

app.route('/api/products/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = PRODUCTS.findIndex(courseIterator => courseIterator.id === courseId);
  PRODUCTS[index] = course;

  response.status(200).send(course);
});

app.route('/api/products/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/products/:id').delete((request, response) => {
  const courseId = +request.params['id'];
  PRODUCTS = PRODUCTS.filter(courseIterator => courseIterator.id !== courseId);

  response.status(204).send({});
});

var PRODUCTS = [
  {
    id: 1,
    name: 'God of War',
    price: 199.99,
    quantity: 200,
    category: 'Ação',
    img: 'img1.jpg'
  },
  {
    id: 2,
    name: 'Final Fantasy 7',
    price: 249.99,
    quantity: 200,
    category: 'RPG',
    img: 'img2.jpg'

  },
  {
    id: 3,
    name: 'Grand Turismo 7',
    price: 199.99,
    quantity: 200,
    category: 'Corrida',
    img: 'img3.jpg'

  },
  {
    id: 4,
    name: 'Street Fighter 5',
    price: 79.99,
    quantity: 200,
    category: 'Luta',
    img: 'img4.jpg'

  },
  {
    id: 5,
    name: 'Hollow Knight',
    price: 23.55,
    quantity: 200,
    category: 'Plataforma',
    img: 'img5.jpg'

  },

];
