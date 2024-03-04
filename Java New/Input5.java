import java.util.Scanner;

public class Input5 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        // we take inputs by spaces and not enter :10,20
        System.out.println("Enter first number:");
        int n1=sc.nextInt();
        // hence it will not take it again 
        System.out.println("Enter second number");
        int n2=sc.nextInt();
        System.out.println(n1+n2);
        sc.close();
    }
}
