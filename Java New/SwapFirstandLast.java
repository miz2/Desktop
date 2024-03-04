public class SwapFirstandLast {
    public static void main(String[] args) {
        int num=1234;
        int copy=num;
        int lastDigit=num%10;
        int firstDigit=0,count=0;
        while(copy!=0){
            copy/=10;
            count++;
        }
        firstDigit=num/(int)(Math.pow(10, count-1));
        
        System.out.println(firstDigit+ " "+lastDigit);

        // middle
        // remove the last digit 
        num/=10;
        int middleDigit= (num%(int)Math.pow(10, count-2))*10;
        // middleDigit=middleDigit*10;
       int result= lastDigit*(int) Math.pow(10,count-1) +middleDigit+firstDigit;
       System.out.println(result);
    }
}
