public class Condtional {
    public static void main(String[] args) {
        // if accepts only boolean in java if(x=1) is not allowed 
        // if else ,multiple if else ,nested if else 
        int a=5,b=7,c=2;
        if(a>b){
            if(a>c){
                System.out.println("a is largest");
            }

        }
        if(b>c){
            if(b>a){
                System.out.println("b is largest");
            }
        }
        if(c>a){
            if(c>a){
                if(c>b){
                    System.out.println("c is largest");
                }
            }
        }
        // better approach 
        if(a>b){
            if(a>c){
                System.out.println("a is largest");
            }
            else{
                System.out.println("c is largest");
            }
        }
        else{
            if(b>c){
                System.out.println("b is largest");
            }
            else{
                System.out.println("c is largest");
            }
        }

    }
}
// find greater no in 4 
