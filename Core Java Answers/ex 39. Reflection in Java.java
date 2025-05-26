import java.lang.reflect.*;

class Sample {
    private void greet(String name) {
        System.out.println("Hello, " + name);
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("Sample");
        Object obj = clazz.getDeclaredConstructor().newInstance();
        Method method = clazz.getDeclaredMethod("greet", String.class);
        method.setAccessible(true);
        method.invoke(obj, "Reflection");
    }
}
