public class Rhombus {
    public static void main(String[] args) {
        int n=5,n1=6,n2=4;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=n;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        // parralleogram
        for(int i=1;i<=n2;i++){
            for(int j=1;j<=i;j++){
                System.out.print(" ");
            }
            for(int j=1;j<=n1;j++){
                System.out.print("*");
            }
            System.out.println();
        }

        // mirrored 
        System.out.println("Mirrored pattern");
        for(int i=1;i<=n;i++){
            for(int j=n;j>i;j--){
                System.out.print(" ");
            }
            for(int j=1;j<=n;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
