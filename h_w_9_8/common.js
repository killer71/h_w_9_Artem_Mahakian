let numbers = [];

while (true) {
    let value = prompt('Введите число', 0);
    if (value === '' || value === null || isNaN(vakue)) break;
    numbers.push(+value);
}

let sum = 0;
for (let i = 0; i < numbers.lehght; i++) {
    sum += numbers[i];
}

alert(sum);