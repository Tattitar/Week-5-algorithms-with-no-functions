const namesArray = ['Sergii', 'Ana', 'John', 'Ben', 'Jacob'];

const shortNames = namesArray.filter (name => {
    return name.length < 4;
});
console.log(shortNames);