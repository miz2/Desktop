from constraint import Problem

def custom_constraint(a, b, c):
    return a + b == c

problem = Problem()

values_A = [int(x) for x in input("Enter values for A separated by spaces: ").split()]
values_B = [int(x) for x in input("Enter values for B separated by spaces: ").split()]
values_C = [int(x) for x in input("Enter values for C separated by spaces: ").split()]

problem.addVariable("A", values_A)
problem.addVariable("B", values_B)
problem.addVariable("C", values_C)

problem.addConstraint(custom_constraint, ("A", "B", "C"))

solutions = problem.getSolutions()

for solution in solutions:
    print(solution)
