public class LoopsQues {
    public static void main(String[] args) {
        // sum at even and odd positions 
        // %10 helps to give the position
        int osum=0,esum=0;
        int n=8971;
        int pos=0;
        while(n>0){
        int lastDigit=n%10;
        pos++;
        
            if(pos%2==0){
                esum+=lastDigit;
            }
            else{
                osum+=lastDigit;
            }
            n/=10;

        }
        System.out.println("Even sum " +esum);
        System.out.println("Odd sum "+osum);
    }
}
