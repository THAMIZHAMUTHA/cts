import java.util.*;
import java.util.stream.*;

record Person(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 30),
            new Person("Bob", 25),
            new Person("Charlie", 35)
        );

        people.stream()
              .filter(p -> p.age() > 30)
              .forEach(System.out::println);
    }
}
