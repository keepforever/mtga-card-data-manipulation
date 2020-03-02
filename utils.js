function validateAddDeckList(list) {
    let isSideBoard = false;
    // console.group('validateAddDeckList');

    const cards = list.split('\n');
    // console.log('\n', '\n', `cards = `, cards, '\n', '\n');

    const firstEmptyIndex = cards.indexOf('');

    if (firstEmptyIndex === -1) {
        return true;
    }

    let sideboardStartIndex = -1;
    if (firstEmptyIndex > 0 && cards[firstEmptyIndex + 1] && cards[firstEmptyIndex + 1].length) {
        isSideBoard = true;

        sideboardStartIndex = firstEmptyIndex + 1;

        const sideBoardArray = cards.splice(sideboardStartIndex, Infinity);

        const mainBoardArray = cards.splice(0, sideboardStartIndex - 1);

        return [
            isSideBoard,
            // JSON.stringify(sideBoardArray),
            // JSON.stringify(mainBoardArray)
            sideBoardArray.join('\n'),
            mainBoardArray.join('\n')
        ];
    }

    // console.groupEnd();
    return [false, []];
}

function getCardLookup(card) {
    console.group('getCardLookup');
    console.log('\n', '\n', `card = `, card, '\n', '\n');

    const set = card
        .trim()
        .match(/\((.*)\)/)
        .pop()
        .toLowerCase();
    const cardNumber = card
        .trim()
        .split(' ')
        .slice(-1)
        .pop();

    let key = set + cardNumber;

    console.log('\n', '\n', `key = `, key, '\n', '\n');

    console.groupEnd();

    return key;
}

function getCardsMetadata(deck) {
    const cardsArray = deck.split('\n');
    console.log('\n', '\n', `cardsArray = `, cardsArray, '\n', '\n');

    const deckObjectArray = cardsArray
        .filter(c => c)
        .map(c => {
            return getCardLookup(c);
        });

    return deckObjectArray;
}

module.exports = {
    validateAddDeckList,
    getCardLookup,
    getCardsMetadata
};
