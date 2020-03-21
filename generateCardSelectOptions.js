const fs = require('fs');
const cardDict = require('./generated/card_dict_full.json');

let cardSelectOptions = [];
// console.log('\n', '\n', `sampleCards = `, sampleCards, '\n', '\n');

const generateCardSelectOptions = () => {
    Object.keys(cardDict).forEach(cardKey => {
        cardSelectOptions.push({ label: cardDict[cardKey].title, value: cardDict[cardKey].key });
    });
    // console.log('\n', '\n', `cardSelectOptions = `, cardSelectOptions, '\n', '\n');
    // console.log('\n', '\n', `finalCardDictFull = `, finalCardDictFull, '\n', '\n');
    const stringifiedCardSelectOptions = JSON.stringify(cardSelectOptions);

    fs.writeFile('./generated/cardSelectOptions.json', stringifiedCardSelectOptions, err => {
        if (err) {
            console.log('Error writing cardSelectOptions.json', err);
        } else {
            console.log('Successfully wrote cardSelectOptions.json');
        }
    });
};

generateCardSelectOptions();
