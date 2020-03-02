const fs = require('fs');
const locDict = require('./generated/locDictionary.json');
const sampleCards = require('./mtgadata/sampleCards');
const fullCards = require('./mtgadata/data_cards');

const finalCardDictSample = {};
// console.log('\n', '\n', `sampleCards = `, sampleCards, '\n', '\n');

const generateCardDictSample = () => {
    sampleCards.forEach(card => {
        const key = `${card.set.toLowerCase()}${card.CollectorNumber}`;
        finalCardDictSample[key] = {
            flavor: card.flavorId ? locDict[card.flavorId] : null,
            title: card.titleId ? locDict[card.titleId] : null,
            type: card.cardTypeTextId ? locDict[card.cardTypeTextId] : null,
            subType: card.subtypeTextId ? locDict[card.subtypeTextId] : null,
            castingCost: card.castingcost ? card.castingcost : null
        };
    });

    console.log('\n', '\n', `finalCardDictSample = `, finalCardDictSample, '\n', '\n');
};

// generateCardDictSample();

const finalCardDictFull = {};

const generateCardDictFull = () => {
    fullCards.forEach((card, index) => {
        if (!card.isToken) {
            const key = `${card.set.toLowerCase()}${card.CollectorNumber}`;
            finalCardDictFull[key] = {
                title: card.titleId ? locDict[card.titleId] : null,
                cmc: card.cmc || null,
                castingCost: card.castingcost ? card.castingcost : null,
                rarity: card.rarity || null,
                type: card.cardTypeTextId ? locDict[card.cardTypeTextId] : null,
                subType: card.subtypeTextId ? locDict[card.subtypeTextId] : null,
                flavor: card.flavorId ? locDict[card.flavorId] : null
            };
        }
    });

    // console.log('\n', '\n', `finalCardDictFull = `, finalCardDictFull, '\n', '\n');

    const stringifiedFinalCardDictFull = JSON.stringify(finalCardDictFull);
    fs.writeFile('./generated/card_dict_full.json', stringifiedFinalCardDictFull, err => {
        if (err) {
            console.log('Error writing card_dict_full.json', err);
        } else {
            console.log('Successfully wrote card_dict_full.json');
        }
    });
};

generateCardDictFull();
