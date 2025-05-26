import java.util.Random;
import java.util.Scanner;

public class NumberGuessGame {

    private int numberToGuess;

    public NumberGuessGame() {
        Random rand = new Random();
        numberToGuess = rand.nextInt(100) + 1;
    }

    public void startGame() {
        Scanner sc = new Scanner(System.in);
        int guess = 0;

        System.out.println("Guess the number (1 to 100):");

        while (guess != numberToGuess) {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();

            if (guess > numberToGuess) {
                System.out.println("Too high! Try again.");
            } else if (guess < numberToGuess) {
                System.out.println("Too low! Try again.");
            } else {
                System.out.println("Congratulations! You guessed it right.");
            }
        }

        sc.close();
    }

    public static void main(String[] args) {
        NumberGuessGame game = new NumberGuessGame();
        game.startGame();
    }
}
