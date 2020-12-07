function countVowelConsonant(str) {
    const vowels = 'aeiou'
    
    return str.split('').map(c => vowels.includes(c) ? 1 : 2).reduce((a, b) => a + b)
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
