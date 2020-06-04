const wordSearch = (letters, word) => { 
    const reversed = word.split('').reverse().join('');
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = [];
    
    for (let i = 0; i < letters[0].length; i++) {
        let string = "";
        letters.forEach(subArr => string += subArr[i]);
        verticalJoin.push(string);
    }
    
    for (const l of horizontalJoin) {
        if (l.includes(word) || l.includes(reversed)) return true;
    }
    for (const l of verticalJoin) {
        if (l.includes(word) || l.includes(reversed)) {
            return true;
        }
    }


    return false; 
}


module.exports = wordSearch