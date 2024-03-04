public class NestedLoops {
    public static void main(String[] args) {
        // java suppirts labelled loops
        outer:
        for(int i=0;i<=3;i++){
            for(int j=0;j<=3;j++){
                if(i==j){
                    // exit from  the current loop
                    // break;
                    // continue;
                    continue outer;
                    // to skip the current iteration does direct j++
                    // return; 
                    // exit from the current function 
                }
                System.out.println(i+" "+j);
            }
        }
    }
}
