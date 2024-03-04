class Graph:
    def __init__(self):
        self.graph = {}
    def add_edge(self, node, neighbor):
        if node in self.graph:
            self.graph[node].append(neighbor)
        else:
            self.graph[node] = [neighbor]
    def dfs(self, start_node, visited=None):
        if visited is None:
            visited = set()
        visited.add(start_node)
        print(start_node, end=' ')
        for neighbor in self.graph.get(start_node, []):
            if neighbor not in visited:
                self.dfs(neighbor, visited)
g = Graph()
num_nodes = int(input("Enter the number of nodes: "))
num_edges = int(input("Enter the number of edges: "))
for _ in range(num_edges):
    node, neighbor = map(int, input("Enter an edge (node neighbor):").split())
    g.add_edge(node, neighbor)
start_node = int(input("Enter the starting node for DFS: "))
print("Depth-First Search starting from node", start_node, ":")
g.dfs(start_node)
