import java.util.Scanner;

public class Input4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Id:");
        int id = sc.nextInt();

        // Consume the newline character left in the buffer
        sc.nextLine();

        System.out.println("Enter the name:");
        String name = sc.nextLine();

        System.out.println("Enter the city:");
        String city = sc.nextLine();

        System.out.println("id: " + id + ", name: " + name + ", city: " + city);
        // sc.close closes both the Scanner and System.in()
    //      sc.close();
        // we generally close the scanner when we don't need it and then re decalre
        // sc=new Scanner(System.in);
        System.out.println("Enter Phone ");
        String phone=sc.next();
        System.out.println("Phone: "+phone);
        // hence scanner must be at last of our code
        sc.close();
    }
}
