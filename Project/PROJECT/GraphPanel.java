package PROJECT;
import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

public class GraphPanel extends JPanel {
    private ArrayList<Point> vertices;

    public GraphPanel() {
        vertices = new ArrayList<>();
    }

    public void addVertex(Point vertex) {
        vertices.add(vertex);
        repaint();
    }

    public void drawEdge(Graphics g, Point p1, Point p2) {
        g.drawLine(p1.x, p1.y, p2.x, p2.y);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        for (Point vertex : vertices) {
            g.fillOval(vertex.x - 10, vertex.y - 10, 20, 20);
        }
        // You may need to modify this loop to draw edges based on your graph representation
        for (int i = 0; i < vertices.size(); i++) {
            for (int j = i + 1; j < vertices.size(); j++) {
                drawEdge(g, vertices.get(i), vertices.get(j));
            }
        }
    }
}

