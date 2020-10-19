let arr = [{name: {data: 'Bro', id: 1}}, 213, 222];

arr.splice(1, 1, {name: {data: 'Ti', id: 1}});
arr.forEach(value => {
    console.log(value);
});

let number = arr.indexOf(213);
console.log(number);
let b = arr.includes(213);
console.log(b);
let find = arr.find(item => item.name.data === 'Ti');
console.log(find);

let filter = arr.filter(item => item.name.id <2);
console.log(filter.length);

