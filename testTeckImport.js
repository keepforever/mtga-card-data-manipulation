const { validateAddDeckList, getCardLookup, getCardsMetadata } = require('./utils');
const { deckOne, deckTwo } = require('./arenaExports');

const main = () => {
    const testOne = validateAddDeckList(deckOne);
    const testTwo = validateAddDeckList(deckTwo);

    console.log('\n', '\n', `testOne = `, testOne, '\n', '\n');
    console.log('\n', '\n', `testTwo = `, testTwo, '\n', '\n');

    const testGetCardMeta = getCardsMetadata(deckOne)

    console.log('\n', '\n', `testGetCardMeta = `, testGetCardMeta, '\n', '\n');
};

main();
