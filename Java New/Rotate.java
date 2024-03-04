public class Rotate {
    public static void main(String[] args) {
        int num=12345;
        int rotate=8;
        int newNum=0;
        int count=0;
        int copy=num;
        while(copy>0){
            copy/=10;
            count++;
        }
        // keep it in range 
        rotate=rotate%count;
        int lhs=num/(int)Math.pow(10,rotate);
        int rhs=num%(int)Math.pow(10, rotate);
        newNum+=rhs*(int)(Math.pow(10, count-rotate))+lhs;
        System.out.println(newNum);
    }
}
