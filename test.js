const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


test('1 euro son 1.07 dolares', () => {
    let total = fromEuroToDollar(1);
    expect(total).toBe(1*1.07)
})

test('1 dollar son 146.26 yenes', () => {
    let total = fromDollarToYen(1)
    expect(total).toBe((1/1.07)*156.5)
})

test(' 179.89 yenes son 1 libra', () => {
    let total = fromYenToPound(179.89)
    expect(total).toBe((179.89/156.5)*0.87)
})