for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("BatataDoce");
    } else if (i % 3 === 0) {
        console.log("Batata");
    } else if (i % 5 === 0) {
        console.log("Doce");
    } else {
        console.log(i);
    }
}
