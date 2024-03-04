import java.util.Scanner;

class Accounts {
    Scanner scan = new Scanner(System.in);
    int balance;

    public Accounts(int initialBalance) {
        balance = initialBalance;
    }

    public int withdraw() {
        System.out.print("Enter amount you want to withdraw: ");
        int withAmt = scan.nextInt();
        if (withAmt > balance) {
            System.out.println("Insufficient balance. Cannot withdraw.");
        } else {
            balance -= withAmt;
            System.out.println("Withdrawn: " + withAmt);
        }
        return balance;
    }

    public int deposit() {
        System.out.print("Enter amount you want to deposit: ");
        int depoAmt = scan.nextInt();
        balance += depoAmt;
        System.out.println("Deposited: " + depoAmt);
        return balance;
    }
}

public class Bank {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter initial bank balance: ");
        int initialBalance = scan.nextInt();
        Accounts account = new Accounts(initialBalance);

        while (true) {
            System.out.println("\nWelcome to Bank Systems:");
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = scan.nextInt();

            switch (choice) {
                case 1:
                    account.deposit();
                    break;
                case 2:
                    account.withdraw();
                    break;
                case 3:
                    System.out.println("Exiting bank application.....");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }

            System.out.println("Current Balance: " + account.balance);
        }
    }
}
