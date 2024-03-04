public class Rec1 {
    // 1+2+3=6
    static int sum(int n){
        if(n==0){
            return 0;
        }
       int s= sum(n/10);
       return s+n %10;
    }
    static void sumoFDigit(int n,int sum){
        if(n==0){
            System.out.println(sum);
            return;
        }
        sumoFDigit(n/10, sum+n%10);
    }
    public static void main(String[] args) {
        sumoFDigit(123, 0);
       System.out.println(sum(423)); 
    }
}
