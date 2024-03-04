def water_jug_problem(jug1_capacity, jug2_capacity, target):
    jug1 = 0
    jug2 = 0
    steps = []

    while jug1 != target and jug2 != target:
        if jug1 == 0:
            jug1 = jug1_capacity
            steps.append((jug1, jug2))
        elif jug1 > 0 and jug2 < jug2_capacity:
            pour = min(jug1, jug2_capacity - jug2)
            jug1 -= pour
            jug2 += pour
            steps.append((jug1, jug2))
        elif jug2 == jug2_capacity:
            jug2 = 0
            steps.append((jug1, jug2))
        elif jug2 == 0:
            jug1 = 0
            steps.append((jug1, jug2))

    return steps

# Get user input for jug capacities and target volume
jug1_capacity = int(input("Enter the capacity of jug 1: "))
jug2_capacity = int(input("Enter the capacity of jug 2: "))
target = int(input("Enter the target volume: "))

solution = water_jug_problem(jug1_capacity, jug2_capacity, target)

if solution:
    print("Solution found:")
    for step, state in enumerate(solution):
        jug1, jug2 = state
        print(f"Step {step + 1}: Jug1 = {jug1}, Jug2 = {jug2}")
else:
    print("No solution found.")
