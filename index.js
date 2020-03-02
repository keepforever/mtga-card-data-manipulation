const fs = require('fs');
const { cards } = require('./data_cards');
// const { buildMasterValue, currentSets, buildMasterKey } = require('./utils');

let temp;
let tempKeys;

let finalDictionary = {};

const main = () => {
    if (err) {
        console.log('File read failed:', err);
        return;
    }

    try {
        const temp = JSON.parse(jsonString);
        const tempKeys = Object.keys(temp);

        cards.forEach((card, index) => {
            if (index % 100 === 0) {
                console.log(card);
            }
        });
    } catch (err) {
        console.log('Error parsing JSON string:', err);
    } finally {
        // const finalDictionaryJsonString = JSON.stringify(finalDictionary);
        // fs.writeFile('./cardDictionary.json', finalDictionaryJsonString, err => {
        //     if (err) {
        //         console.log('Error writing file', err);
        //     } else {
        //         console.log('Successfully wrote file');
        //     }
        // });
    }
});

main();
