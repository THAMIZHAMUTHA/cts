public class TypeCastingExample {
    static {
        double doubleVal = 9.78;
        int intVal = (int) doubleVal;

        int originalInt = 15;
        double convertedDouble = (double) originalInt;

        System.out.println("Original double: " + doubleVal);
        System.out.println("After casting to int: " + intVal);
        System.out.println("Original int: " + originalInt);
        System.out.println("After casting to double: " + convertedDouble);
    }

    public static void main(String[] args) {
        // Everything is done in static block
    }
}
