let salaries = {
    'Jhon' : 400,
    'Jack' : 20000,
    'test' : 'asdasdasd'
};

let max = 0;
let maxUserName = '';
for (let name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxUserName = name;
    }
}

alert( maxUserName || 'нет сотрудников' );