function arrayMaximalAdjacentDifference(nums) {
    let maximalAdjacentDifference = 0;
    
    let i = 1;
    while (i < nums.length) {
        adjacentDifference = Math.abs(nums[i] - nums[i - 1]);
        if (adjacentDifference > maximalAdjacentDifference) {
            maximalAdjacentDifference = adjacentDifference;
        }
        i++;
    }
    
    return maximalAdjacentDifference;
}



/**
* Test Suite 
*/
describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});
