const fs = require('fs');
const cards = require('./data_cards');
const loc = require('./data_loc');

const main = () => {
    console.log('\n', '\n', `hello main = `, '\n', '\n');

    cards.forEach((card, index) => {
        if (index % 1000 === 0) {
            console.log(card);
        }
    });

    loc.
};

main();
