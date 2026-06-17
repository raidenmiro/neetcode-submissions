func dailyTemperatures(temperatures []int) []int {
	res := make([]int, len(temperatures))
	stack := make([][2]int, 0, len(temperatures)) 

	for i, v := range temperatures {
		for len(stack) > 0 && v > stack[len(stack)-1][0] {
			last := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			res[last[1]] = i - last[1]
		}
		stack = append(stack, [2]int{v, i})
	}

	return res
}
