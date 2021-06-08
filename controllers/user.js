const User = require ("../models/user");

exports.getAllNotes = (req, res, next) => {
  //User.findById = (req.user._id) //we request the user id
  res.render('notes/notes.hbs', {id:1});  //views is already considered by default
};

exports.displayAllNotes = (req, res, next) => {
  User.findById(req.req.params.id);
  console.log(req.params.id);
  res.render('notes/notes.hbs')
}

exports.login = (req, res) => {

}
/*
exports.getAllNotes = (req, res, next) => {

  //business logic to retrieve all the notes from database
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
};*/