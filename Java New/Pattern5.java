public class Pattern5 {
    public static void main(String[] args) {
        int range = 5;
        for (int i = 0; i <range; i++) {
            for (int space = 1; space < range - i; space++) {
                System.out.print(".");
            }

            int odd = 2 * i + 1;
            for (int star = 1; star <= odd; star++) {
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
