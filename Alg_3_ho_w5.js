function numberAdder(mainNumber) {
    const addUp = []
    for (let i = 1; i <= mainNumber; i++) {
    addUp.push(i)
    }
    // console.log(addUp);

    const value = addUp.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });
    console.log(value);
};
numberAdder(4);
numberAdder(13);
numberAdder(600);