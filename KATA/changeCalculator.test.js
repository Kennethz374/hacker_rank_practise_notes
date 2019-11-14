/* eslint-disable no-undef */
const calculateChange = require('./changeCalculator');

test('total amount has to pay equal 3000, and cash given 4522', () => {
  // eslint-disable-next-line no-undef
  expect(calculateChange(3000, 4522)).toStrictEqual(
    { tenDollar:1,
      fiveDollar:1,
      dime:2,
      penny:2
    });
  expect(calculateChange(1787, 2000)).toStrictEqual(
    { twoDollar: 1, dime: 1, penny: 3 });

  expect(calculateChange(2623, 4000)).toStrictEqual(
    {tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 });

  expect(calculateChange(501, 1000)).toStrictEqual(
    { twoDollar: 2, quarter: 3, dime: 2, penny: 4 });

  expect(calculateChange(2000, 1000)).toStrictEqual(
    "Do Not Pay Enough Money");

  expect(calculateChange(2000, 2000)).toStrictEqual(
    "Do Not Need changes");

  expect(calculateChange(2000, 10000)).toStrictEqual(
    { twentyDollar: 4});

});