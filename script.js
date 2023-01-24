const today = document.getElementById('today');

const date = new Date();

let week = date.getDay() - 1
let month = date.getMonth()
const day = date.getDate()
const year = date.getFullYear()

const weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ["January", 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December']

week = weeks[week];
month = months[month];

today.innerText = `${week}, ${month} ${day}, ${year}`;