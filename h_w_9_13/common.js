function getWeekDay(date) {
    let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    return days[date.getDay()];
}

let date = new Date(2018, 3, 12);
alert( getWeekDay(date) );