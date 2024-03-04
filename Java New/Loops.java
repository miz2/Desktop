public class Loops {
    public static void main(String[] args) {
        // while for do while enhanced for loop
        // while vs for 
        // for is based for a particular time we know start and end and increment how thing happen inside it 
        // while when we are not sure what will happen 
        // do while works atleast once 

        // Problem 1
        int n=17;
        int count=0;
        for(int i=1;i<=n;i++){
            if(n%i==0){
                count++;
            }
        }
        System.out.println(count==2?"Prime Number":"Not a prime number");
        // better approach 
        for(int i=2;i<n;i++){
            if(n%i==0){
                System.out.println("Not a prime number");
                return;
            }
        }
        System.out.println("Prime Number");

        // improwised approach 
        // better not to divide twice as it will be duplicate 
        // 6*6=36
        // x*x=n
        // x=underroot n
        // tc is underroot n 
        // can use i*i
        for(int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                System.out.println("Not a prime number");
                return;
            }
        }
         System.out.println("Prime Number");
    }
}
