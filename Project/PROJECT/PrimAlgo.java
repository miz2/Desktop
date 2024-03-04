import java.awt.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.PriorityQueue;

public class PrimAlgo {
    public static ArrayList<Edge> primMST(ArrayList<Point> vertices, ArrayList<Edge> edges) {
        ArrayList<Edge> mst = new ArrayList<>();
        PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(Edge::getWeight));

        Point startVertex = vertices.get(0);
        boolean[] visited = new boolean[vertices.size()];
        visited[vertices.indexOf(startVertex)] = true;

        while (mst.size() < vertices.size() - 1) {
            for (Edge edge : edges) {
                if (visited[vertices.indexOf(edge.getFrom())] && !visited[vertices.indexOf(edge.getTo())]) {
                    pq.add(edge);
                }
            }

            Edge minEdge = pq.poll();
            int toIndex = vertices.indexOf(minEdge.getTo());
            visited[toIndex] = true;
            mst.add(minEdge);
        }

        return mst;
    }
}
