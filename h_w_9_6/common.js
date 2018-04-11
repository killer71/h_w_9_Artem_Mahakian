let user = {
    'Jhon' : 300,
    'Mark' : 500,
    'Robert' : 250
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(user);

alert( 'user Jhon=' + user.Jhon + 'user Mark=' + user.Mark + 'user Robert' + user.Robert );