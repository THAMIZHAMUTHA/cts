import java.util.Scanner;

public class ArraySumAverage {

    public static int sumArray(int[] arr) {
        int sum = 0;
        for (int val : arr) {
            sum += val;
        }
        return sum;
    }

    public static double averageArray(int[] arr) {
        return sumArray(arr) / (double) arr.length;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " integers:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int sum = sumArray(arr);
        double avg = averageArray(arr);

        System.out.println("Sum: " + sum);
        System.out.println("Average: " + avg);

        sc.close();
    }
}
