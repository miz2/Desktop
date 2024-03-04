public class Add {
    public static void main(String[] args) {
        // commandline args:all arguments are string
        // hence this is our cutomized command
        // String fv=args[0];
        // System.out.println(fv);
        if(args.length==2){
            int fn=Integer.parseInt(args[0]);
            int sn=Integer.parseInt(args[1]);
        System.out.println(fn+sn);
        }
        else{
            System.out.println("Enter only 2 ");
        }
        // but with commandline args we can put n no of arguments
        int sum=0;
        // hence use loops
        for(int i=0;i<args.length;i++){
            sum+=Integer.parseInt(args[i]);
        }
        System.out.println("sum: "+sum);
        
    }
}
