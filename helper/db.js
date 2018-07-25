const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://movie_user:abc1234@ds247061.mlab.com:47061/mfy-movie-api', { useNewUrlParser: true });

    mongoose.connection.on('open', () => {
       console.log('MongoDB Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB Error', err);
    });

    mongoose.Promise = global.Promise;
};