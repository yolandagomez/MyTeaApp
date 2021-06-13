const mongoose = require ('mongoose');

const connectionToDb = () => {
    const MONGODB_LOCAL=process.env.LOCAL_MONGODB_URL;
    mongoose.connect(MONGODB_LOCAL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("connecting to the DDBB");
}
//this is Maria's solution of another option of the function
/*const dbConnect = async ()=> {
    try {
        await mongoose.connect(MONGODB_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected 👽');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err); 
    }
}*/


//exporting the function for app.js to use it
module.exports = connectionToDb;

