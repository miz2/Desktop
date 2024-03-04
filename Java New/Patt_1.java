public class Patt_1 {
    public static void main(String[] args) {
        int n = 5;
        System.out.println("Triangle");
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        System.out.println("Pyramid Star");
        for (int i = 0; i < n; i++) {
            for (int space = 1; space < n - i; space++) {
                System.out.print(" ");
            }

            int odd = 2 * i + 1;
            for (int star = 1; star <= odd; star++) {
                System.out.print("*");
            }

            System.out.println();
        }
        System.out.println("Hollow star pyramid");
        for (int i = 0; i < n; i++) {
            for (int space = 1; space < n - i; space++) {
                System.out.print(" ");
            }

            int odd = 2 * i + 1;
            for (int star = 1; star <= odd; star++) {
                if (star == 1 || star == odd || i == n - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }

            System.out.println();
        }

        System.out.println("Inverted Star");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(" ");
            }

            int odd = 2 * (n - i) - 1;

            for (int star = 0; star < odd; star++) {
                System.out.print("*");
            }

            System.out.println();
        }
        System.out.println("Inverted Hollow Star");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(" ");
            }

            int odd = 2 * (n - i) - 1;

            for (int star = 0; star < odd; star++) {
                if (star == 0 || star == odd - 1 || i == 0) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }

            System.out.println();
        }
        System.out.println("Half diamond pattern ");
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
            for(int j=n;j>=1;j--){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
