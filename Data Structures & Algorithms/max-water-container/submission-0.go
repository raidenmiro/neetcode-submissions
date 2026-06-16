func maxArea(heights []int) int {
	left := 0
	right := len(heights) - 1

	maxArea := 0

	for left < right {
		leftHeight := heights[left]
		rightHeight := heights[right]

		area := (right - left) * min(leftHeight, rightHeight)

		maxArea = max(area, maxArea)

		if leftHeight >= rightHeight {
			right--
		} else {
			left++
		}
	}

	return maxArea
}
