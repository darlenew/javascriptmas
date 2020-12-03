function depositProfit(deposit, rate, threshold) {
    let year = 0;
    let balance = deposit;
    
    if (deposit === 0) {
        return null
    }
    
    if ((deposit < threshold) && (rate === 0)) {
        return null
    }
    
    while (true) {
        if (balance >= threshold) {
            return year;
        } 
        let interest = balance * rate / 100
        balance = balance + interest
        
        year++;
    }
}



/**
* Test Suite 
*/
describe('depositProfit()', () => {
    it('returns number of years it will take to hit threshold based off of deposit & rate', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        
        // act
        const result = depositProfit(deposit, rate, threshold)

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});
