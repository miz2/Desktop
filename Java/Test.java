import java.util.LinkedHashMap;
import java.util.Map;

public class Test {
    public static void main(String[] args) {
        Map map=new LinkedHashMap<>();
        map.put("123", "John Smith");
        map.put("111","Ian Smith");
        System.out.println("(1)"+map);
        System.out.println("(2)"+new LinkedHashMap(map));
    }
}
