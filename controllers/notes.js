/*These controllers, when the endpoints are ChannelSplitterNode, return JSON, or wahtever */

//this file contains the functions of the app

exports.updateNote = (req, res, next) => {
  Note.findByIdandUpdate(req.params.ide, req.body, {runValidators:true }, ()=>{
    if (note) {
      res.render('views/')
    } else {
      console.log('This note doesn\'t exist')
    }
  });
  //we are oging to have an arr of elements
  //check composition bc there could be issues updating it since tis an arr
  //if you are in template a, redirect to template b
  res.redirect('user/notes');

}

exports.getNote = (req, res, next) => {
  Note.findByIde(req.params.id)
  .then(
    note => res.render('views/edit.hbs', {note:note})
  ).catch(
    //next(new Error("custom error")) //and let the middleware handler, the error
    err => res.render('views/edit.hbs', {error:err})
  );

}

exports.getNoteById = (req, res, next) => {
        res.render("notes/edit", {id: 1, title: Jasmine
        }
        )
}

exports.updatingInfo = (req, res, next) => {
        res.status(200).json({
        success: true,
        msg: `update info of note with id: ${req.params.id}`
});
}

exports.deletingNote = (req, res, next) => {
        res.status(200).json({
        success: true,
        msg: `delete note with id: ${req.params.id}`
})
}

exports.deleteNote = (req, res, next) => {
  let user = req.user;
  Note.findByIdAndDelete(req.params.id, ()=>{
    if (err) {
      console.log(err);
    } else {
      user.notes.pull(req.params.id); //we removed the element from the arr
      user.save(); //we should save now
      console.log('User has been saved');
      //TBD is that my file is To be defined, i havent one yet
      res.render('views/TBD.hbs')
    }
  });
  req.user.notes;
}

exports.createNote = (req, res, next) => {
    let note = new Note(req.body);
    note.save((err) => {
      if (err) {
        next (err);
        return;
      } else {
        let user = req.user;
        user.notes.push(note._id);
        user.save((err) => {
          if (err) {
            next(err);
            return;
          }
          res.redirect('/user/notes')
        });
      }
    })
  }

exports.createGreeting = (req, res, next) => {
        res.send('<h1>My tea notes</h1>');
}

exports.allNotes = (req, res, next) => {
    res.status(200).json({
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
}

