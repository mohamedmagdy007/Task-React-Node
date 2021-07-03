const mongoose = require('mongoose');
const url = "mongodb+srv://mohamed:Mongo12345@cluster0.45tov.mongodb.net/ProjectReact&Node?retryWrites=true&w=majority"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});