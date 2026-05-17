class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for idx in range(len(tokens)):
            token = tokens[idx]

            if token not in '-+/*':
                stack.append(token)
            else:
                a, b = int(stack.pop()), int(stack.pop())

                match token:
                    case '+':
                        stack.append(a + b)
                    case '-':
                        stack.append(b - a)
                    case '*':
                        stack.append(a * b)
                    case '/':
                        stack.append(int(b / a))
                
        return int(stack.pop())