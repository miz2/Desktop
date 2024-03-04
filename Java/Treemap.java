import java.util.TreeMap;

public class Treemap {
    public static void main(String[] args) {
        TreeMap <String,Integer> num=new TreeMap<>();
        num.put("two", 2) ;
        num.put("three", 3);
        System.out.println(num);
        TreeMap <String ,Integer> ha=new TreeMap<>();
        ha.putAll(num);
        System.out.println(ha);
        System.out.println("Key/value mapping"+ha.entrySet());
        System.out.println("keys"+num.keySet()); 
        System.out.println("values"+num.values());
        int val=num.get("two");
        System.out.println(val);
        System.out.println(num.getOrDefault("ten", 20));
        num.remove("two");
        System.out.println(num);
        boolean x=num.remove("ten", 10);
        System.out.println(x);
    }
}
