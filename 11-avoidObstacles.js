function avoidObstacles(nums) {
    step = 2
    
    const isNotObstacle = (num) => (num % step);        
    while(1) {
        if (nums.every(isNotObstacle)) {
            return step;
        }
        step++;
    }
}



/**
* Test Suite 
*/
describe('avoidObstacles()', () => {
    it('returns minimal number of jumps in between numbers', () => {
        // arrange
        const nums = [5, 3, 6, 7, 9];
        
        // act
        const result = avoidObstacles(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(4);
    });
});
