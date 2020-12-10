function adjacentElementsProduct(nums) {
    let maxProduct = nums[0] * nums[1]
    let i = 2;
    
    while (i < nums.length) {
        let product = nums[i] * nums[i - 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
        i++;
    }
    
    return maxProduct;
}



/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});