// Define the interface
interface IAccount {
    // Methods are by default public in an interface
    // it becomes tightly coupled 
    // hence now we have all the methods accessible 
    // private is too private and public is too public 
    // hence we need abstraction 
    // from dev to dev we need abstraction 
    // till JAVA 7 interface is 100% abstract but after that we can have body of function 
    void deposit();

    void withdraw();
}

// interface is present everywhere :it hides everything and hence we don't want that change to 
// Implement the interface in the Account class
// this process is known as upcasting 
class Account implements IAccount {
    // Implement interface methods
    void deposit() {
        // Implementation for deposit
    }

    void withdraw() {
        // Implementation for withdraw
    }

    void show() {
        // Implementation for show
    }

    // Member variable
    double rateOfInterest = 15.2;
}

// Customer class using abstraction
class Customer {
    // Composition with abstraction (IAccount)
    IAccount ac = new Account();

    // Accessing methods through abstraction
    // ac.show(); // This cannot be accessed directly as it's not part of IAccount
    ac.deposit(); // Accessing deposit method through abstraction
    // ac.withdraw(); // You can access withdraw method if needed

    // The rest of the class implementation
}

// Main class
public class OOPS {
    public static void main(String[] args) {
        // Your main method implementation
    }
}
