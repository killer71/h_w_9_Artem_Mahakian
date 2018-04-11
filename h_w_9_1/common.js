function randomInteger(min, max) {
    let random = min - 1 + Math.random() * (max - min + 1);
    random = Math.round(random);
    return random;
};

alert( randomInteger(5, 10) );