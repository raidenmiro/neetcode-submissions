class MinStack:
    def __init__(self):
      self.minVal = float('inf')
      self.stack = []

    def push(self, val: int) -> None:
        if val < self.minVal:
            self.minVal = val
        self.stack.append(val)

    def pop(self) -> None:
        top = self.stack.pop()

        if self.minVal == top:
            newMinVal = float('inf')

            for v in self.stack:
                if v < newMinVal:
                    newMinVal = v
            
            self.minVal = newMinVal

        return top

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minVal
