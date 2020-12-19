function arrayPreviousLess(nums) {
    result = [];
    
    for (const [i, num] of nums.entries()) {
        // keep looking to the left until you find a smaller value
        for (j=i-1; j >= 0; j--) {
            if (nums[j] < num) {
                break;
            }
        }
        if (j >= 0) {
            result.push(nums[j]);
        } else {
            result.push(-1);
        }
    }
    
    return result;
}



/**
* Test Suite 
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [3, 5, 2, 4, 5];
        
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});
