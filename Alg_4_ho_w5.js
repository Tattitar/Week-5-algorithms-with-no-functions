var drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

drinks.sort((a, b) => Number(a.price) - Number(b.price));
console.log("ascending", drinks)

