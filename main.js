// Write a function that takes a string which represents a customer's Kopi order. Populate an object with the correct ingredients e.g. "kopi o kosong" would return
// {
//   kopi: 1,
//   sugar: 0,
//   evaporatedMilk: false,
//   condensedMilk: false,
//   ice: false,
//   cost: 1.50
// }
// As an extension, your object can include an array or instructions for the server by which they can make the drink e.g.
// {
//   ...
//   steps: [
//     'pour in 1 portion of kopi',
//     ...
//   ]
// }

var orderOutcome = {
  kopi: 1,
  sugar: 2,
  evaporatedMilk: false,
  condensedMilk: true,
  ice: false,
  cost: 1.50
}

var input = 'kopi gao kosong si'

function coffeePortion(elem) {
    if (elem.includes('gao') === true) {
    orderOutcome.kopi = 2
    orderOutcome.cost = orderOutcome.cost + 0.50
  } else if (elem.includes('di') === true) {
    elemOutcome.kopi = 3
    orderOutcome.cost = orderOutcome.cost + 1.00
  } else if (elem.includes('po')=== true) {
    orderOutcome.kopi = 0.5
    orderOutcome.cost = 1.50
  } else {
    orderOutcome.kopi = 1
    orderOutcome.cost = 1.50
  }
}

function milkType(elem) {
  if (elem.includes('si') === true) {
    orderOutcome.evaporatedMilk = true
    orderOutcome.condensedMilk = false
    orderOutcome.cost = orderOutcome.cost + 0.50
  } else if (elem.includes('o') === true) {
    orderOutcome.evaporatedMilk = false
    orderOutcome.condensedMilk = false
  } else {
    orderOutcome.evaporatedMilk = false
    orderOutcome.condensedMilk = true
  }
}

function sweetType(elem) {
  if (elem.includes('kosong') === true) {
    orderOutcome.sugar = 0
  } else if (elem.includes('siu') === true) {
    orderOutcome.sugar = 1
  } else if (elem.includes('gah') === true) {
    orderOutcome.sugar = 3
  } else {
    orderOutcome.sugar = 2
  }
}

function stateType (elem) {
  if (elem.includes('ice')=== true) {
    orderOutcome.ice = true
    orderOutcome.cost = orderOutcome.cost + 0.50
  } else {
    orderOutcome.ice = false
  }
}

function putOrderTogether (elem) {
  coffeePortion(elem),
  milkType(elem),
  sweetType(elem),
  stateType(elem)
  return orderOutcome
}

console.log(putOrderTogether(input))
