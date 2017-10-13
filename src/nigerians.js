var uniqueRandomArray = require('unique-random-array');
var nigerianUsers = require('./nigerians.json');

var getRandomUser = uniqueRandomArray(nigerianUsers);

module.exports = {
    all: nigerianUsers,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomUser();
    } else {
        var randomUsers = [];
        for (var i = 0; i < number; i++) {
            randomUsers.push(getRandomUser());
        }
        return randomUsers;
    }
}