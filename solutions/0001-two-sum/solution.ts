function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()

    for (let i = 0; i < nums.length; i++){
        const value = nums[i]
        const complement = target - value

        if(map.has(complement)){
            return [map.get(complement), i]
        }

        map.set(value, i)
    }

    return []
};
