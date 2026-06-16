func longestConsecutive(nums []int) int {
    maxLen := 0

    uniq := make(map[int]bool)

    for i := range nums {
        v := nums[i]
        uniq[v] = true
    }

    for i := range nums {
        v := nums[i]
        n := v - 1

        if !uniq[n] {
            cnt := 1
            next := v + 1

            for uniq[next] {
                cnt++
                next++
            }

            if cnt > maxLen {
                maxLen = cnt
            }
        }
    }

    return maxLen
}