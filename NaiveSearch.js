function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            console.log(long[i + j], short[j]);
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                console.log("Found");
                count++;
            }
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")