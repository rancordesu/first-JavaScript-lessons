const time = new Date().getHours()
let jikan;
if (time < 10) {
    jikan = 'Good morning!'
}
else if (time < 12) {
    jikan =  'Good noon'
}
else if (time < 4) {
    jikan = 'Good Afternoon'
}
else if (time < 20) {
    jikan = 'Good Evening'
}
else {
    jikan = 'Good Night'
}

console.log(time)
console.log(jikan)
