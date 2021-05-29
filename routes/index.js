const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/greeting', (req, res, next) {
  res.render('index', { title: 'Express' }); // esto lo he dejado del template del express generator, probablemente no me sirva, Jessica lo tiene distinto
});

router.get('/', (req, res) => {
  res.status(200).json({ //this is the response that will appear on Postman
    success: true,
    notes: [
      {
        id: 1,
        title: 'Jasmine',
                image: 'https://dhb3yazwboecu.cloudfront.net/1007/fotosProducto/tes/13020_JasmineChungFeng_1000x1000_l.jpg',
                components: ['sencha green tea', 'jasmine flowers'],
                category: 'green',
                review: "Good"
      }, 
      {
                id: 2,
                title: 'Chai',
                image: 'https://dhb3yazwboecu.cloudfront.net/1007/fotosProducto/tes/10156_ChaiLatte_1000x1000_l.jpg',
                components: ['tea', 'chai mix'],
                category: 'black',
                review: "Spice, warm, very recommended after a good yoga practice :)"
      },
      {
                id: 3,
                image: 'http://ronontherunn.com/wp-content/uploads/2018/08/Conoce-la-golden-milk-800x418.png',
                title: 'Golden Milk',
                components: ['tea', 'turmeric', 'almond milk'],
                category: 'red',
                review: 'Too much flavour at tumeric :('
      },
      {
                id: 4,
                image: 'https://dhb3yazwboecu.cloudfront.net/1007/fotosProducto/tes/14013_StrawberryFresh_1000x1000_l.jpg',
                title: 'Strawberry Roses',
                components: ['Bai Hao Yinzhen', 'strawberries', 'petal rose'],
                category: 'white',
                review: 'Flowery taste, good for calming the mind'
      }
    ]
  });
});

router.get('/id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Note with id: ${req.params.id}`
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    msg: `I don't recognize the req.body bc I don't know to deserialized it yet` //why we don't have success: true here?
  });
});

router.put('/id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `update info of note with id: ${req.params.id}`
  });
});

router.delete('/id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `delete note with id: ${req.params.id}`
  });
});

//exports router to use it on app.js
module.exports = router;

//why there is no error handle here ??????
