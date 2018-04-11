function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let empty = {};

alert( isEmpty(empty) );

empty['12:00'] = 'обед';

alert( isEmpty(empty) );