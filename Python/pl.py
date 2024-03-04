import random
from collections import defaultdict

random_numbers = [random.randint(100, 999) for _ in range(100)]
vms = ['vm1', 'vm2', 'vm3', 'vm4']

schedule = defaultdict(list)

for i, number in enumerate(random_numbers):
    vm = vms[i % len(vms)]
    schedule[vm].append(number)

for vm, numbers in schedule.items():
    print(f"{vm}: {numbers}")
