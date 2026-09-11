/** @format */

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("Oi");
    fetchData().then((text) => {
        console.log(text);
        fetchData().then((text2) => {
            console.log(text2);
        });
    });
}, 2000);
console.log("Tchau");
