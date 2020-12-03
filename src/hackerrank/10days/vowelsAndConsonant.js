function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    let consonants = [];
    
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.match(s[i])) {
            console.log(s[i])
        } else{
            consonants.push(s[i])
            }
            }
            consonants.map(consonant => console.log(consonant))
}
            
            

console.log(vowelsAndConsonants('javascriptloops'))


