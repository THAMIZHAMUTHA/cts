import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string to reverse: ");
        String input = sc.nextLine();

        StringBuilder sb = new StringBuilder(input);
        sb.reverse();

        System.out.println("Reversed string: " + sb.toString());

        sc.close();
    }
}
