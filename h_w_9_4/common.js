let salaries = {
    'Jhon' : 400,
    'Jack' : 20000,
    'test' : 'asdasdasd'
};

let summa = 0;

for (let name in salaries) {
    summa += salaries[name];
}

alert(summa);