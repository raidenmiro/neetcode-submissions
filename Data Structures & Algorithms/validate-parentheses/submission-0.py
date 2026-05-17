class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        op_br = { '{': '}', '[': ']', '(' : ')'}

        for ch in s:
            if ch in op_br:
                stack.append(ch)
            else:
                if len(stack) == 0:
                    return False

                last_op_br = stack.pop()

                if op_br[last_op_br] != ch:
                    return False

        return len(stack) == 0