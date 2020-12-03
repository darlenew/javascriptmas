function chunkyMonkey(values, size) {
    let start = 0;
    let end = size;
    let result = [];

    while (end < values.length) {
        result.push(values.slice(start, end));
        start = end;
        end = start + size;
    }
    result.push(values.slice(start));

    return result;
}



/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});
