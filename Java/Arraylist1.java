import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

public class Arraylist1 {
    public static void main(String[] args) {
        ArrayList<String> l1=new ArrayList<>();
        l1.add("Cheeku");
        System.out.println(l1);
        ArrayList <Integer> l2=new ArrayList<Integer>();
        ArrayList <Boolean> l3=new ArrayList<Boolean>();
        l2.add(3);
        l2.add(5);
        l2.add(2);
        System.out.println(l2);
        // get elements
        int e=l2.get(2);
        System.out.println(e);
        // adding elements in between
        l2.add(1, 10);
        System.out.println(l2);
        // set element 
        l2.set(0, 11);
        System.out.println(l2);

        // delete element
        l2.remove(3);
        System.out.println(l2);
        // size of arraylist
        System.out.println(l2.size());
        for(int i=0;i<l2.size();i++){
            System.out.println(l2.get(i));
        }
        System.out.println();
        // sorting
        Collections.sort(l2);

        // traversing through on iterator 
        Iterator it=l2.iterator();
        while(it.hasNext()){
            System.out.println(it.next());
        }
    }
}
