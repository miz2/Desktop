import java.util.Comparator;
import java.util.TreeMap;
// public static class CustomComparator implements Comparator<String>{
// @Override
// public int Compare(int num1,int num2){

// }}
public class TMCOMP {
    public static void main(String[] args) {
        TreeMap <String,Integer> num=new TreeMap<>();
        num.put("two", 2) ;
        num.put("three", 3);
        num.put("ten", 10);
        num.put("nine", 9);
        System.out.println(num);
    }
}
