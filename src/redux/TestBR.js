// let arr = [{name: {data: 'Bro', id: 1}}, 213, 222];
//
// arr.splice(1, 1, {name: {data: 'Ti', id: 1}});
// arr.forEach(value => {
//     console.log(value);
// });
//
// let number = arr.indexOf(213);
// console.log(number);
// let b = arr.includes(213);
// console.log(b);
// let find = arr.find(item => item.name.data === 'Ti');
// console.log(find);
//
// let filter = arr.filter(item => item.name.id <2);
// console.log(filter.length);
//

//
// let arr = [123,'bro', 'ti', 123];
// arr.push('cool');
// arr.splice(2, 2);
// arr.sort().filter(value => value !== 'bro').map(value => value+')))').forEach(value => console.log(value + ' ))'));


const man ={
    name:'Bro',
    arrData:['123','456'],
    newObj:{
        name:'Ma',
        age:123
    }
};
const newMan={...man};
newMan.arrData={...man.arrData};
newMan.name={...man.name};
// newMan.arrData.push(['234']);
newMan.name='pet';
// newMan.arrData.push('798');
console.log(newMan === man);
console.log(newMan.name);
