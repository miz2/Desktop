import heapq

class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, node, neighbor, cost):
        if node in self.graph:
            self.graph[node].append((neighbor, cost))
        else:
            self.graph[node] = [(neighbor, cost)]

    def best_first_search(self, start, goal):
        open_list = [(0, start, [start])]  # Priority queue with (heuristic value, node, path)
        visited = set()

        while open_list:
            cost, current_node, path = heapq.heappop(open_list)

            if current_node == goal:
                return path  # Return the path when the goal is reached

            if current_node in visited:
                continue

            visited.add(current_node)

            # Expand the current node's neighbors
            for neighbor, neighbor_cost in self.graph.get(current_node, []):
                if neighbor not in visited:
                    new_path = path + [neighbor]
                    heapq.heappush(open_list, (neighbor_cost, neighbor, new_path))

        return None  # Goal not reached
if __name__ == '__main__':
    g = Graph()
    # Add edges to the graph (node, neighbor, heuristic_cost)
    g.add_edge('A', 'B', 3)
    g.add_edge('A', 'C', 5)
    g.add_edge('B', 'D', 2)
    g.add_edge('B', 'E', 8)
    g.add_edge('C', 'F', 7)
    g.add_edge('C', 'G', 4)
    start_node = 'A'
    goal_node = 'G'
    path = g.best_first_search(start_node, goal_node)
    if path:
       print(f"Path from '{start_node}' to '{goal_node}': {' ->'.join(path)}")
    else:
        print(f"Goal node '{goal_node}' is not reachable from '{start_node}'")
