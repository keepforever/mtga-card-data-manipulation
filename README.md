## I learned about the card extraction method described below from this video and repo: 

Video: https://youtu.be/aIo06p5G1WQ
Repo: https://github.com/andreliverod/MTGA-Card-Data-Explorer

## NOTE: You only need to repeat this process when there's been an update and new cards have been released. The current files in this repo are recent as of `03/01/2020`

## NOTE: Depending on what sort of information you want available in your card dictionary, you may need to augment `generateCardDictFull()` in `generateCardDict.js` to suit your needs.

## How to source the contents of `mtgadata` folder:

1. Copy `data_cards_xxxxx.mtga` and `data_loc_xxxxx.mtga` files from "\MTGA_Data\Downloads\Data" to the `mtgadata` folder.


2. Rename the two files to data_cards.js and data_loc.js

3. Edit the two files with an editor that can open large files (vscode worked ok, but my macbook pro was screaming. I would reccomend completing this operation as quickly as possible and closing the file) and put the array in each file into a variable by doing the following:

In data_cards.js add the following to the start of the file in front of the "[" character:

```js
var cards =
```

Then add a `;` at the end of the file right after the "`]`" character;

In data_loc.js add the following to the start of the file in front of the "`[`" character:

```js
var loc =
```

Then add a `;` at the end of the file right after the "`]`" character;

## Deciphering card items in `card_dict_full.json`

Hybrid mana example:

```json
{
    "castingCost": "o1o(U/B)o(U/B)" // 1 colorless, 1 blue or black, 1 blue or black
}
```
