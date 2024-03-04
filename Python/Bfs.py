from collections import deque

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

def bfs(graph, start, target):
    visited = set()  # To keep track of visited nodes
    queue = deque([(start, [start])])  # Initialize the queue with the start node and its path

    while queue:
        node, path = queue.popleft()  # Dequeue a node and its path
        if node == target:
            print(f"Target node '{target}' found in the BFS traversal.")
            print("Traversal path:", ' -> '.join(path))
            return

        if node not in visited:
            visited.add(node)  # Mark the node as visited
            # Enqueue all adjacent nodes that haven't been visited
            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.append((neighbor, path + [neighbor]))

    print(f"Target node '{target}' not found in the graph.")

start_node = input("Enter the starting node: ")
target_node = input("Enter the target node: ")

print("Performing BFS traversal:")
bfs(graph, start_node, target_node)
