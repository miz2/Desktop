import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Input2 {
    public static void main(String[] args)throws IOException{
        // reads only a single file and throws an Io Exception
        
        // int single =System.in.read();
        // // returns the ASCII value of what we sent 
        // System.out.println(single);
        // so it takes only one value to resolve it we can

        // byte q[]=System.in.readAllBytes();
        // // now it will contine to read values without stopping and to stop press ctrl+c
        // System.out.println(q);

        // hence better to use Buffered Reader :
        // data gets stored in the buffer container :but it is not a input mechanism :
        // data may come from file or network or sender input
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter the first Name:");
        String firstName=br.readLine();
        System.out.println("Enter Id:");
        int id=Integer.parseInt(br.readLine());
        System.out.println("ID: "+id+" firstname: "+firstName);
        // close the buffer to prevent data leakage 
        br.close();

    }
}
