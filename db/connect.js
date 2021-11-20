const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://root:root@nodeplayground.08sme.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connect to Db...'))
    .catch((err) => console.log(err))