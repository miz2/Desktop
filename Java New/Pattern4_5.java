public class Pattern4_5 {
public static void main(String[] args) {
    int range=5;
    for(int i=1;i<=range;i++){
        for(int space=1;space<=range-i;space++){
            System.out.print(" ");
        }
        for(int star=1;star<=i;star++){
            System.out.print("* ");
        }
    
    

        System.out.println();
    }
}
}
