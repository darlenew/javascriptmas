function sumOfTwo(nums1, nums2, value) {
    nums2Set = new Set(nums2)
    
    for (num1 of nums1) {
        if (nums2Set.has(value - num1)) {
            return true
        }
    }
    
    return false
}



/**
* Test Suite 
*/
describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        // arrange
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 42;
        
        // act
        const result = sumOfTwo(nums1, nums2, value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});
