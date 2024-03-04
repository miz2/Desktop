def water_jug_puzzle(target):
    jug4 = 4  # Capacity of the 4-gallon jug
    jug3 = 3  # Capacity of the 3-gallon jug
    current_jug4 = 0  # Current amount of water in the 4-gallon jug
    current_jug3 = 0  # Current amount of water in the 3-gallon jug

    while current_jug4 != target:
        # Fill the 4-gallon jug if it's empty
        if current_jug4 == 0:
            current_jug4 = jug4
            print(f"Fill the 4-gallon jug: ({current_jug4}/{jug4}), ({current_jug3}/{jug3})")

        # Pour water from the 4-gallon jug to the 3-gallon jug
        pour_amount = min(current_jug4, jug3 - current_jug3)
        current_jug4 -= pour_amount
        current_jug3 += pour_amount
        print(f"Pour water from 4-gallon to 3-gallon: ({current_jug4}/{jug4}), ({current_jug3}/{jug3})")

        # Empty the 3-gallon jug if it's full
        if current_jug3 == jug3:
            current_jug3 = 0
            print(f"Empty the 3-gallon jug: ({current_jug4}/{jug4}), ({current_jug3}/{jug3})")

    print("Target achieved!")

# Call the function with the target amount of 2 gallons
water_jug_puzzle(2)
