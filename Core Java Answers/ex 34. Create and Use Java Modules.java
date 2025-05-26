// module-info.java
module com.utils {
    exports com.utils;
}
// com/utils/Utility.java
package com.utils;

public class Utility {
    public static String greet(String name) {
        return "Hello, " + name;
    }
}
// module-info.java
module com.greetings {
    requires com.utils;
}
// com/greetings/Main.java
package com.greetings;

import com.utils.Utility;

public class Main {
    public static void main(String[] args) {
        System.out.println(Utility.greet("World"));
    }
}
