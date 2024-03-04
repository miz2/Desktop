package PROJECT;
import java.awt.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class KruskalAlgorithm {
    public static ArrayList<Edge> kruskalMST(ArrayList<Point> vertices, ArrayList<Edge> edges) {
        ArrayList<Edge> mst = new ArrayList<>();
        Collections.sort(edges, Comparator.comparingInt(Edge::getWeight));

        UnionFind uf = new UnionFind(vertices.size());

        for (Edge edge : edges) {
            int from = vertices.indexOf(edge.getFrom());
            int to = vertices.indexOf(edge.getTo());

            if (uf.union(from, to)) {
                mst.add(edge);
            }
        }

        return mst;
    }
}
