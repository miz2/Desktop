# Control flow in Python

# Declaring the variable x
x = 10

# Conditional Statements: If, else, and elif
print("Conditional Statements If else and elif")

if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5")

# Loops in Python:

# For loop
print("For loop")
for i in range(3):
    print(i)

# While loop
n = 0
print("While loop")
while n < 5:
    print(n)
    n += 1
print("Break Statement")

# They are used to break a loop when a certain condition is achieved
for i in range(5):
    if i == 2:
        break
    print(i)

print("Continue Statement")

# They are used to skip a particular condition in a loop
for i in range(5):
    if i == 2:
        continue
    print(i)

# Making functions

# We use functions because of Conciseness, Readability, Code Organization, and Reusability

def add(a, b):
    # Using return Statements
    return a + b

print("Addition of a and b:", add(3, 4))

# Even or odd function
def is_even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Calling a function
print("45 is", is_even_or_odd(45))

# Function to calculate the factorial of a number
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Calculating factorial of 5
print("Factorial:", factorial(5))

# Functions can be called anywhere in the entire program.
