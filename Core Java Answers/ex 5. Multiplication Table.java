import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        System.out.println("Multiplication Table for " + num);
        for (int i = 1; i <= 10; i++) {
            System.out.printf("%2d x %2d = %3d%n", num, i, num * i);
        }
    }
}
