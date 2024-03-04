s="Hello my name is miz"
print(s[-1])
print(s[0:4])
# Reverse a list
my_list = [1, 2, 3, 4, 5]
my_list[::-1]  # Output: [5, 4, 3, 2, 1]
print(my_list)
# Access the last few elements in a list
my_list[-3:]  # Output: [3, 4, 5]
print(my_list)
# Access the first few elements in a list
my_list[:3]  # Output: [1, 2, 3]
print(my_list)
s1="mizaan"
print(s1[-8:-1])

# Identity Operators
a = [1, 2, 3]
b = [1, 2, 3]
c = a

is_same_object = a is b
is_not_same_object = a is not b
is_same_reference = a is c

print("Is a the same object as b?", is_same_object)
print("Is a not the same object as b?", is_not_same_object)
print("Is a the same reference as c?", is_same_reference)
