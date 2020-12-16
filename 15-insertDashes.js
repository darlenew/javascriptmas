function insertDashes(arr) {
    let wordsWithDashes = arr.split(' ').map(word => {
        return word.split('').join('-')
    })
    
    return wordsWithDashes.join(' ');
}


/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});
