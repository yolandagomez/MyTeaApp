const mongoose = require ('mongoose');

mongoose.connect(MONGODB_LOCAL, {useNewUrlParser: true, useUnifiedTopology: true});

MONGODB_LOCAL=process.env.LOCAL_MONGODB_URL;

const functionThatDoesNothing = () => {
    mongoose.connect(MONGODB_LOCAL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("testing");
}
