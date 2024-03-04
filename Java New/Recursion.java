public class Recursion {
   static void show(int n)
    {
        if(n==0){
            return;
        }
        // processing logic 
        // think about small problem 
        System.out.println("Mizaan "+n);
        // tail recursion 
        // n is a local varibale and we make its copy 6 times and passed as an argument 
        show(n-1);
        System.out.println("Miz Backtracking "+n);
        // need a  termination case 
        
       
    }
    public static void main(String[] args) {
        show(4);
    }
}
