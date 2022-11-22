const mongoose = require("mongoose"); //to get module mongoose

mongoose.connect("mongodb://127.0.0.1:27017/userRegistration", {}) //connect function
.then(() => {
    console.log(`connection successful`); //print connection successful
})
.catch((e) => {   //catch if error occur
    console.log(`connection failed`);
});