import java.io.*;
import java.util.* ;
    class LinkedListNode<T> {
        T data;
        LinkedListNode<T> next;
        LinkedListNode(T data)
        {
            this.data = data;
            this.next = null;
        }
    }

public class DelNode {
	public static void deleteNode(LinkedListNode<Integer> node) {
		// Write your code here.
        node.data=node.next.data;
        node.next=node.next.next;
	}
}