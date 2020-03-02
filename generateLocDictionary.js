const fs = require('fs');
const dataLoc = require('./mtgadata/data_loc');
const locDict = require('./locDictionary.json');
const sampleCards = require('./sampleCards');

let finalDictionary = {};

const main = () => {
    console.log('\n', `hello generateLocDictionary main() `, '\n');
    try {
        dataLoc.keys.forEach(item => {
            finalDictionary[item.id] = item.text;
        });
    } catch (error) {
        console.log(error);
    } finally {
        const finalDictionaryJsonString = JSON.stringify(finalDictionary);
        fs.writeFile('./locDictionary.json', finalDictionaryJsonString, err => {
            if (err) {
                console.log('Error writing locDictionary.json', err);
            } else {
                console.log('Successfully wrote locDictionary.json');
            }
        });
    }
};

main();
