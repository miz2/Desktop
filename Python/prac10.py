from constraint import Problem
problem = Problem()
problem.addVariable("A", [1, 5, 3])
problem.addVariable("B", [4, 2, 7])
problem.addVariable("C", [6, 9, 8])
def custom_constraint(a, b, c):
    return a + b == c
problem.addConstraint(custom_constraint, ("A", "B", "C"))
solutions = problem.getSolutions()
for solution in solutions:
    print(solution)
