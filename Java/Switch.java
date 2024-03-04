public class Switch {
    public static void main(String[] args) {
        // break vs return vs yield
        // we exit from the block using the break
        // exit from process then system.exit()

        // return exits from the current function
        int d = 1;
        int r = switch (d) {
            case 1 -> {
                System.out.println("Case 1 Shirt");
                yield 10;
                // yield helps to switch to the next thread
                // when we have multiple options
            }
            case 2 -> {
                System.out.println("Case 2 Jeans");
                yield 20;
            }
            default -> {
                System.out.println("All dis");
                yield 50;
            }
        };

        // makes code simple when we have to equality comparison
        int item = 1;
        final int BURGER = 1;
        final int DRINK = 2;
        final int DESSERT = 3;

        // switch can also return something
        System.out.println("Discount is" + switch (d) {
            case 1 -> 20;
            case 2 -> 30;
            case 3 -> 40;
            default -> 5;
        });

        switch (item) {
            // without break, it will traverse all the cases and recommend options like a concept
            // hence break application is not necessary
            case BURGER:
                // item=1
                System.out.println("Price is Rs. 100");
                break;
            case DRINK:
                System.out.println("Price is Rs.50");
            case DESSERT:
                System.out.println("Price is 200");
            default:
                System.out.println("50% off");
        }

        // AFTER JAVA 7, it started accepting string values

        String it = "burger";
        switch (item) {
            case "burger":
                System.out.println("Price is Rs. 100");
            case "drink":
                System.out.println("Rs. 100");
        }
        // after Java 14, we can auto-break using -> and : makes it fall
        switch (it) {
            case "burger", "pizza" -> System.out.println("Price is Rs. Rs. 150");
            case "drink" -> {
                // now we are allowed to use {}
                System.out.println("Price is Rs. 40");
                System.out.println("Mocktails available");
            }
        }
    }
}


// -> is an lambda function 
// yield takes us out of main thread