func longestConsecutive(nums []int) int {
    maxLen := 0

    uniq := make(map[int]bool)

    for _, v := range nums {
        uniq[v] = true
    }

    for _, v := range nums {
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