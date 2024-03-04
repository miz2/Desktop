package PROJECT;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
class Edge {
    private Point from;
    private Point to;
    private int weight;
    public Object getTo() {
        return null;
    }

    // Constructor, getters, and setters
}
public class GUI extends JFrame {
    private GraphPanel graphPanel;
    private ArrayList<Point> vertices;
    private ArrayList<Edge> edges;

    public GUI() {
        setTitle("Minimum Spanning Tree Visualization");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        vertices = new ArrayList<>();
        edges = new ArrayList<>();

        graphPanel = new GraphPanel();
        add(graphPanel, BorderLayout.CENTER);

        JButton kruskalButton = new JButton("Kruskal's Algorithm");
        kruskalButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                ArrayList<Edge> mst = KruskalAlgorithm.kruskalMST(vertices, edges);
                // Process and display the result
            }
        });

        JButton primButton = new JButton("Prim's Algorithm");
        primButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                ArrayList<Edge> mst = PrimAlgorithm.primMST(vertices, edges);
                // Process and display the result
            }
        });

        JPanel buttonPanel = new JPanel();
        buttonPanel.add(kruskalButton);
        buttonPanel.add(primButton);

        add(buttonPanel, BorderLayout.SOUTH);

        addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                Point clickedPoint = evt.getPoint();
                vertices.add(clickedPoint);
                graphPanel.addVertex(clickedPoint);
                repaint();
            }
        });
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            GUI gui = new GUI();
            gui.setVisible(true);
        });
    }
}
