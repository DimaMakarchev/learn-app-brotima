const callbackTi = (data, funmOne, funNext) => {
    funmOne(data);
    funNext(data);
};
const funX = (data) => {
    if (data === 1) {

        setTimeout(() => {
            console.log(1)
        }, 3000)
    } else {
        console.log("no 1")
    }
};
const funNext = (data) => {
    if (data === 1) {
        console.log(2)
    } else {
        console.log("no 2")
    }
};

callbackTi(1, funX, funNext);

let man = {
    _name:'bro'
    ,

}

