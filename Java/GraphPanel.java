import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.ArrayList;
import java.util.List;
class GraphFrame extends JFrame {

    public GraphFrame(boolean[][] adjacencyMatrix, String[] edgeNames, int[] edgeWeights) {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 600);

        GraphPanel graphPanel = new GraphPanel(adjacencyMatrix, edgeNames, edgeWeights);
        add(graphPanel);

        setVisible(true);
    }
}
public class GraphPanel extends JPanel {

    private List<Edge> edges = new ArrayList<>();
    private boolean[][] adjacencyMatrix;
    private String[] edgeNames;
    private int[] edgeWeights;

    public GraphPanel(boolean[][] adjacencyMatrix, String[] edgeNames, int[] edgeWeights) {
        this.adjacencyMatrix = adjacencyMatrix;
        this.edgeNames = edgeNames;
        this.edgeWeights = edgeWeights;

        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
                int x = e.getX();
                int y = e.getY();
                // Check which edge was clicked and handle accordingly
            }
        });
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        // Draw the graph and its components here
    }
}