function celTofarh(celsius){
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit
}
const num = 20;
const avg = celTofarh(num);
console.log(avg);