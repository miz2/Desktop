public class DuckNo {
    public static boolean checkNumber(int number) {  
        // use loop to repeat steps  
        while(number != 0) {  
           // check whether the last digit of the number is zero or not  
           if(number%10 == 0)  
              return true;    //return true if the number is Duck  
    
           // divide the number by 10 to remove the last digit  
           number = number / 10;  
        }  
    
        return false; //return false if the number is not Duck  
     }  
    public static void main(String[] args) {
        System.out.println(checkNumber(0234));
    }
}
