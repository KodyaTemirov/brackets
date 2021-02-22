module.exports = function check(str, bracketsConfig) {
    const pairs = bracketsConfig.map(arr => arr[0] + arr[1]);
    let lastLength = str.length;
    while (lastLength !== 0) {
      pairs.forEach(pair => str = str.replace(pair, ''));
      lastLength === str.length ? false : lastLength = str.length;
    }
    return true;
}

