public class Per {
    public static int circular_func(int n, int divisor_part) {
        if (n < 10) return n;
        // else return (n % divisor_part) * 10 + n / divisor_part;
        else{
            int n1=n%divisor_part;
            int n2=n/=divisor_part;
            int result=n1*10+n2;
            return result;
        }
    }

    public static void main(String[] args) {
        int num = 6152, num_of_digits = 0, divisor_part = 1,cn=num;
        for (int i = num; i > 0; i /= 10) {
            num_of_digits++;
            divisor_part *= 10;
        }
         divisor_part /= 10;
        System.out.println(circular_func(num, divisor_part));
        System.out.println(divisor_part);
        System.out.println(num_of_digits);
        // // do{
        //     circular_num = circulate_func( circular_num, divisor_part );
        //     if( !isPrime( circular_num ) ) allPrime=false;
        // }while( circular_num != num );
        // if( allPrime ) System.out.println("It is Circular Prime number." );
        // else System.out.println("It is not a Circular Prime number." );
        do {
            cn = circular_func(cn, divisor_part);
            System.out.println(cn);
        } while (cn != num);
        
    }

    }

