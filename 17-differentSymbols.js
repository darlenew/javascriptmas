// import uniq from "lodash/uniq"

function differentSymbolsNaive(str) {
    let unique = [];
    str.split('').map(c => { 
        if (!unique.includes(c)) {
            unique.push(c);
        }
    })
    
    return unique.length;
}

function differentSymbolsSet(str) {
    let s = new Set(str.split(''));
    
    return s.size;
}

function differentSymbolsLodash(str) {
    return _.uniq(str.split('')).length
}

/**
* Test Suite 
*/
function testDifferentSymbols(fn) {
    describe(`${fn.name}()`, () => {
        it('returns count of unique characters', () => {
            // arrange
            const str = 'cabca';
        
            // act
            const result = fn(str);

            // log
            console.log("result: ", result);
        
            // assert
            expect(result).toBe(3);
        });
   });
}

let differentSymbols = [
    differentSymbolsNaive, 
    differentSymbolsSet,
    differentSymbolsLodash
]
for (fn of differentSymbols) {
    testDifferentSymbols(fn);
}
