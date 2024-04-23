// Buttons.js
export const getButtons = (addOne, add100, increase) => [
  {
    text: 'Add 1',
    className: 'App__add-one',
    onClick: addOne,
  },
  {
    text: 'Add 100',
    className: 'App__add-100',
    onClick: add100,
  },
  {
    text: 'Increase',
    className: 'App__increase',
    onClick: increase,
  },
];
