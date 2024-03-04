import heapq
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, node, neighbor, cost):
        if node in self.graph:
            self.graph[node].append((neighbor, cost))
        else:
            self.graph[node] = [(neighbor, cost)]

    def a_star_search(self, start, goal, heuristic):
        open_list = [(0, start, [start])]
        visited = set()

        while open_list:
            f_cost, current_node, path = heapq.heappop(open_list)

            if current_node == goal:
                return path

            if current_node in visited:
                continue

            visited.add(current_node)

            for neighbor, neighbor_cost in self.graph.get(current_node, []):
                if neighbor not in visited:
                    g_cost = len(path) - 1  # The actual cost from the start node to the current node
                    h_cost = heuristic[neighbor]  # Estimated cost from the neighbor to the goal
                    f_cost = g_cost + h_cost
                    new_path = path + [neighbor]
                    heapq.heappush(open_list, (f_cost, neighbor, new_path))

        return None

if __name__ == '__main__':
    g = Graph()

    # Add edges to the graph (node, neighbor, cost)
    g.add_edge('A', 'B', 4)
    g.add_edge('A', 'C', 2)
    g.add_edge('B', 'D', 5)
    g.add_edge('B', 'E', 10)
    g.add_edge('C', 'F', 3)
    g.add_edge('D', 'G', 7)
    g.add_edge('E', 'G', 5)
    g.add_edge('F', 'G', 8)

    start_node = 'A'
    goal_node = 'G'

    # Define a heuristic function for each node (cost to reach the goal)
    heuristic = {'A': 12, 'B': 10, 'C': 8, 'D': 6, 'E': 4, 'F': 6, 'G': 0}
    path = g.a_star_search(start_node, goal_node, heuristic)
    if path:
        print(f"Path from '{start_node}' to '{goal_node}': {' >'.join(path)}")
    else:
        print(f"Goal node '{goal_node}' is not reachable from '{start_node}'")
