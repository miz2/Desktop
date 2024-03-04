import java.util.Scanner;

public class Input3 {
    public static void main(String[] args) {
        // Scanner is also like a buffer 
        Scanner sc=new Scanner("Hello How are u?\n what to do \n what about you");
        // now we have prebuilt data on the buffer 
        int  countW=0;
        // int countL=0
        while(sc.hasNext()){
            // sc.next() is an iterator :if we have next value then only go further
            // it is better when we don't know what is the limit of data and loop doesn't work 
            // sc.next();
            System.out.println(sc.next());
            countW++;
        }
        // either one of the other will work at a  time 
        // while(sc.hasNextLine()){
        //     System.out.println(sc.nextLine());
        //     sc.nextLine(
        //     countL++;
        // }
        System.out.println("count word "+countW);
        // System.out.println("Count lines "+countL);
        sc.close();
    }
}
