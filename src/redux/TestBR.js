const man = {
    method(ms) {
        setTimeout(() => {
            console.log("OK bro")
        }, ms)
    },

    reqAllToServer(data, ms) {
        return new Promise((resolve, reject) => {
            if (data === "BRO" || ms === 100) {
                console.log(data + " " + ms);
                resolve(ms);
            } else {
                reject("error");
            }
        })
    },


//
// Promise.all([reqAllToServer("BRO", 2000), reqAllToServer("BRdO", 4000)])
//     .then(() => console.log("The and bro))")).catch(reason => {
//     console.log(" Error : ", reason);
// });
};
man.reqAllToServer("BRO", 2000)
    .catch(reason => {
        console.log(" Error : ", reason);
    })
    .then(value => man.method(value));
