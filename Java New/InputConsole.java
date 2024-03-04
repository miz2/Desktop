public class InputConsole {
    public static void main(String[] args) {
        System.out.println("Enter UserId:");
        String uId=System.console().readLine();
        System.out.println("Enter your password");
        char [] pwd=System.console().readPassword();
        System.out.println("User Id"+uId);
        System.out.println("Password "+new String(pwd));
    }
}
