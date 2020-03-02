const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

const cardFacesImportant = inputArray => {
    function helper(el) {
        return {
            name: el.name || null,
            type_line: el.type_line || null,
            mana_cost: el.mana_cost || null,
            text: el.oracle_text || null,
            color: el.colors ? el.colors.join('') : null
        };
    }
    return inputArray.map(el => helper(el));
};

const importantInfoNormal = obj => {
    return {
        name: obj.name,
        lookup: buildMasterKey(obj),
        cmc: obj.cmc,
        type_line: obj.type_line,
        arena_id: obj.arena_id,
        collector_number: obj.collector_number,
        set: obj.set,
        mana_cost: obj.mana_cost,
        rarity: obj.rarity,
        pt: obj.power && obj.toughness ? `${obj.power}/${obj.toughness}` : null,
        color: obj.colors.join(''),
        text: obj.oracle_text,
        layout: obj.layout
    };
};

const importantInfoSplitOrTransform = obj => {
    return {
        name: obj.name || null,
        lookup: buildMasterKey(obj),
        cmc: obj.cmc || null,
        arena_id: obj.arena_id || null,
        collector_number: obj.collector_number || null,
        set: obj.set || null,
        mana_cost: obj.mana_cost || null,
        rarity: obj.rarity || null,
        pt: `${obj.power}/${obj.toughness}` || null,
        color: obj.color_identity ? obj.color_identity.join('') : null,
        layout: obj.layout || null,
        card_faces: cardFacesImportant(obj.card_faces)
    };
};

const buildMasterValue = card => {
    if (card.layout === 'normal') {
        return importantInfoNormal(card);
    }

    if (card.layout === 'split' || card.layout === 'transform') {
        return importantInfoSplitOrTransform(card);
    }
};

const buildMasterKey = card => {
    let cardSet = 'error';
    if (card.set === 'dom') {
        cardSet = 'dar';
    } else {
        cardSet = card.set;
    }
    const layout = card.layout;
    let masterKey = '';
    if (layout === 'split') {
        const prePend = 'xxx';
        masterKey = prePend + card.collector_number + cardSet;
    } else {
        masterKey = card.collector_number + cardSet;
    }

    return masterKey;
};

const currentSets = [
    'ana',
    'dom', // which gets recorded as 'dar'
    'm20',
    'war',
    'rna',
    'g18',
    'grn',
    'm19',
    'rix',
    'xln'
];

const layoutInquiry = {
    normal: 3200,
    split: 45,
    transform: 18,
    token: 76,
    saga: 14
};

const setInquiry = {
    ana: 39,
    dom: 280, // dar
    m20: 338,
    war: 260,
    rna: 273,
    g18: 5,
    grn: 273,
    m19: 314,
    rix: 205,
    xln: 289

    // don't care about
    // tdom: 14,
    // pdom: 1,
    // trix: 5,
    // txln: 10,
    // hou: 209,
    // thou: 12,
    // akh: 287,
    // takh: 24,
    // w17: 30,
    // taer: 3,
    // aer: 194,
    // kld: 274,
    // tkld: 9,
    // ogw: 5
};

module.exports = {
    every_nth,
    importantInfoNormal,
    importantInfoSplitOrTransform,
    buildMasterValue,
    buildMasterKey,
    currentSets
};
