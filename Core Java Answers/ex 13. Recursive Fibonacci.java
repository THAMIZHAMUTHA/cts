import java.util.Scanner;

public class RecursiveFibonacci {

    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a positive integer (n): ");
        int n = sc.nextInt();

        if (n < 0) {
            System.out.println("Please enter a positive integer.");
        } else {
            System.out.println(n + "th Fibonacci number is: " + fibonacci(n));
        }

        sc.close();
    }
}
