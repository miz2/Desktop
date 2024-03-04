class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []

    def add_child(self, child_node):
        self.children.append(child_node)

def minimax(node, is_maximizing):
    if not node.children:
        return node.value

    if is_maximizing:
        max_eval = float('-inf')
        best_child = None
        for child in node.children:
            eval = minimax(child, False)
            if eval > max_eval:
                max_eval = eval
                best_child = child
        node.best_child = best_child
        return max_eval
    else:
        min_eval = float('inf')
        for child in node.children:
            eval = minimax(child, True)
            min_eval = min(min_eval, eval)
        return min_eval

def traverse_tree(node):
    print(f"Visiting node with value {node.value}")
    if hasattr(node, 'best_child'):
        print(f"Best child has value {node.best_child.value}")
        traverse_tree(node.best_child)

# Create a simple game tree
root = TreeNode(3)
child1 = TreeNode(5)
child2 = TreeNode(2)
child3 = TreeNode(9)

root.add_child(child1)
root.add_child(child2)
root.add_child(child3)

child1.add_child(TreeNode(1))
child1.add_child(TreeNode(7))
child2.add_child(TreeNode(6))
child2.add_child(TreeNode(4))
child3.add_child(TreeNode(8))
child3.add_child(TreeNode(0))

# Calculate the minimax value at the root node
minimax_value = minimax(root, True)

print(f"The root node value using Minimax is: {minimax_value}")

print("\nTraversal order:")
traverse_tree(root)
