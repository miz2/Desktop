import java.util.Arrays;
import java.util.HashSet;

public class setopr {
    public static void main(String[] args) {
        Integer[] A = {22, 45,33, 66, 55, 34, 77};  
        Integer[] B = {33, 2, 83, 45, 3, 12, 55};  
        HashSet<Integer> set1 = new HashSet<Integer>();  
        HashSet<Integer> set2 = new HashSet<Integer>();  
        set1.addAll(Arrays.asList(A)) ;
        set2.addAll(Arrays.asList(B));
        System.out.println(set1);
        System.out.println(set2);
        HashSet<Integer> uni = new HashSet<Integer>(set1);
        System.out.println(uni);
        uni.addAll(set2) ;
        System.out.println(uni);
        HashSet<Integer> intersection_data = new HashSet<Integer>(set1);    
        intersection_data.retainAll(set2);    
        System.out.print("Intersection of set1 and set2 is:");    
        System.out.println(intersection_data);    
    
        // Finding Difference of set1 and set2    
        HashSet<Integer> difference_data = new HashSet<Integer>(set1);    
        difference_data.removeAll(set2);    
        System.out.print("Difference of set1 and set2 is:");    
        System.out.println(difference_data);    
    }
}
