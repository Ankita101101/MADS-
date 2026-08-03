# Introduction to Java Programming and Android-Oriented Java Concepts


## Part 1: Introduction to Java Programming

### 1.1 What is Java?

Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems (now owned by Oracle), first released in 1995. Its core philosophy is captured in the phrase **"Write Once, Run Anywhere" (WORA)** — code compiled on one platform can run on any device with a Java Virtual Machine (JVM).

### 1.2 Key Features of Java

| Feature | Description |
|---|---|
| Platform independent | Compiled bytecode runs on any JVM, regardless of OS |
| Object-oriented | Everything is modeled around objects and classes |
| Simple | No pointers, no manual memory management (garbage collection handles it) |
| Secure | No explicit pointers, runs inside a sandboxed JVM, bytecode verification |
| Robust | Strong memory management, exception handling, type checking |
| Multithreaded | Built-in support for concurrent execution |
| Portable | Bytecode is architecture-neutral |
| High performance | Just-In-Time (JIT) compiler improves runtime speed |
| Distributed | Supports networking and remote applications (RMI, sockets) |

### 1.3 JDK, JRE, and JVM

- **JVM (Java Virtual Machine)**: An abstract machine that executes Java bytecode. It provides platform independence.
- **JRE (Java Runtime Environment)**: JVM + core libraries needed to *run* Java applications.
- **JDK (Java Development Kit)**: JRE + development tools (compiler `javac`, debugger, etc.) needed to *write and compile* Java applications.

```
JDK = JRE + Development Tools
JRE = JVM + Libraries
```

### 1.4 Structure of a Java Program

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

- `public class HelloWorld` — class declaration; the filename must match the public class name (`HelloWorld.java`).
- `public static void main(String[] args)` — the entry point of any Java application.
  - `public`: accessible from anywhere.
  - `static`: called without creating an object of the class.
  - `void`: returns nothing.
  - `String[] args`: command-line arguments.

### 1.5 Data Types

**Primitive types** (8 total):

| Type | Size | Example |
|---|---|---|
| `byte` | 1 byte | `byte b = 10;` |
| `short` | 2 bytes | `short s = 100;` |
| `int` | 4 bytes | `int x = 1000;` |
| `long` | 8 bytes | `long l = 100000L;` |
| `float` | 4 bytes | `float f = 3.14f;` |
| `double` | 8 bytes | `double d = 3.14159;` |
| `char` | 2 bytes | `char c = 'A';` |
| `boolean` | 1 bit (JVM-dependent) | `boolean flag = true;` |

**Non-primitive (reference) types**: Strings, Arrays, Classes, Interfaces.

### 1.6 Variables and Operators

Variables can be declared as **local**, **instance**, or **static** (class-level).

Operator categories:
- Arithmetic: `+ - * / %`
- Relational: `== != > < >= <=`
- Logical: `&& || !`
- Assignment: `= += -= *= /=`
- Bitwise: `& | ^ ~ << >> >>>`
- Ternary: `condition ? valueIfTrue : valueIfFalse`

### 1.7 Control Statements

```java
// Conditional
if (score > 90) { grade = "A"; }
else if (score > 75) { grade = "B"; }
else { grade = "C"; }

// Switch
switch (day) {
    case 1: System.out.println("Monday"); break;
    default: System.out.println("Unknown");
}

// Loops
for (int i = 0; i < 5; i++) { }
while (condition) { }
do { } while (condition);
```

### 1.8 Arrays

```java
int[] numbers = {1, 2, 3, 4, 5};
int[][] matrix = new int[3][3]; // 2D array
```

### 1.9 Object-Oriented Programming (OOP) Concepts

Java is built entirely around four OOP pillars:

1. **Encapsulation** — bundling data (fields) and methods together, restricting direct access using access modifiers (`private`, `public`, `protected`).
2. **Inheritance** — a class (`subclass`) acquires properties of another (`superclass`) using `extends`.
3. **Polymorphism** — the ability of an object to take many forms:
   - **Compile-time (method overloading)**: same method name, different parameters.
   - **Runtime (method overriding)**: subclass redefines a superclass method using `@Override`.
4. **Abstraction** — hiding implementation details, exposing only functionality, via `abstract` classes or `interface`s.

```java
class Animal {
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}
```

### 1.10 Classes, Objects, and Constructors

- A **class** is a blueprint; an **object** is an instance of that class.
- A **constructor** initializes an object and shares the class name with no return type.

```java
class Car {
    String model;
    Car(String model) { this.model = model; } // constructor
}

Car myCar = new Car("Sedan"); // object creation
```

### 1.11 Access Modifiers

| Modifier | Class | Package | Subclass | World |
|---|---|---|---|---|
| `private` | Yes | No | No | No |
| default (none) | Yes | Yes | No | No |
| `protected` | Yes | Yes | Yes | No |
| `public` | Yes | Yes | Yes | Yes |

### 1.12 Exception Handling

Java uses `try-catch-finally` to handle runtime errors gracefully without crashing the program.

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} finally {
    System.out.println("This always runs");
}
```

- **Checked exceptions**: checked at compile time (e.g., `IOException`).
- **Unchecked exceptions**: occur at runtime (e.g., `NullPointerException`, `ArithmeticException`).
- Custom exceptions can be created by extending `Exception`.

### 1.13 Packages

Packages group related classes together and help avoid naming conflicts.

```java
package com.example.myapp;
import java.util.ArrayList;
```

### 1.14 Multithreading Basics

Java supports concurrent execution through the `Thread` class or the `Runnable` interface.

```java
class MyThread extends Thread {
    public void run() { System.out.println("Thread running"); }
}

Thread t = new MyThread();
t.start();
```

---

## Part 2: Android-Oriented Java Concepts

Android app development historically relies heavily on Java (Kotlin is now preferred, but Java remains foundational and widely used/tested). Certain Java concepts are used far more heavily in Android than in typical desktop Java programming.

### 2.1 Why Java for Android?

- Android's core APIs (Activity, Service, Intent, etc.) are exposed as Java classes.
- The Android Runtime (ART) executes compiled bytecode, similar in spirit to the JVM.
- Java's OOP model maps naturally onto Android's component-based architecture (Activities, Fragments, Services are all classes).

### 2.2 Classes as Android Components

Every screen in an Android app is a Java class extending a framework base class:

```java
public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
```

This demonstrates **inheritance** (`extends AppCompatActivity`) and **method overriding** (`onCreate`) directly from Part 1.

### 2.3 Interfaces and Listeners

Android relies heavily on interfaces for event handling — a direct application of Java's abstraction concept.

```java
Button button = findViewById(R.id.myButton);
button.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Toast.makeText(MainActivity.this, "Clicked!", Toast.LENGTH_SHORT).show();
    }
});
```

Here, `OnClickListener` is an interface, and an **anonymous inner class** implements it inline.

### 2.4 Anonymous Classes and Lambda Expressions

Since many Android callbacks are single-method interfaces (functional interfaces), Java 8's **lambda expressions** simplify listener code:

```java
button.setOnClickListener(v -> Toast.makeText(this, "Clicked!", Toast.LENGTH_SHORT).show());
```

### 2.5 Inner and Static Nested Classes

Android often uses nested classes for things like `RecyclerView.ViewHolder`:

```java
public class MyAdapter extends RecyclerView.Adapter<MyAdapter.ViewHolder> {
    static class ViewHolder extends RecyclerView.ViewHolder {
        TextView textView;
        ViewHolder(View itemView) {
            super(itemView);
            textView = itemView.findViewById(R.id.textView);
        }
    }
}
```

### 2.6 The `final` Keyword

Commonly used in Android for:
- Constants: `static final String TAG = "MainActivity";`
- Variables referenced inside anonymous classes/lambdas (must be effectively final).

### 2.7 Collections Framework

Android UIs frequently display lists of data, making Java's Collections Framework essential:

```java
List<String> items = new ArrayList<>();
items.add("Item 1");

Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 90);
```

Common collections used in Android: `ArrayList`, `HashMap`, `SparseArray` (Android-optimized alternative to `HashMap<Integer, Object>`).

### 2.8 Generics

Used extensively in Android APIs like `RecyclerView.Adapter<VH>` and `AsyncTask<Params, Progress, Result>` to enforce type safety.

```java
public class Box<T> {
    private T content;
    public void set(T content) { this.content = content; }
    public T get() { return content; }
}
```

### 2.9 Annotations

Android makes heavy use of annotations for metadata and tooling support:

| Annotation | Purpose |
|---|---|
| `@Override` | Marks method overriding a superclass/interface method |
| `@Nullable` / `@NonNull` | Marks whether a value can be null |
| `@SuppressWarnings` | Suppresses compiler warnings |
| `@Deprecated` | Marks obsolete methods |

### 2.10 Multithreading in Android

The Android main thread (UI thread) must never be blocked. Java threading concepts are extended by Android-specific classes:

- **Thread / Runnable**: base Java concurrency.
- **Handler**: sends and processes messages/tasks associated with a thread's message queue.
- **AsyncTask** (deprecated in newer APIs but conceptually important): performed background operations and published results on the UI thread.
- **ExecutorService**: modern preferred approach for background thread pools.

```java
new Thread(() -> {
    // background work
    runOnUiThread(() -> {
        // update UI safely
    });
}).start();
```

### 2.11 Serialization: `Serializable` vs `Parcelable`

To pass objects between Android components (e.g., via `Intent`), objects must be serialized:

- **`Serializable`**: standard Java interface, simple but slower (uses reflection).
- **`Parcelable`**: Android-specific interface, faster, requires more boilerplate code.

```java
public class User implements Serializable {
    String name;
    int age;
}
```

### 2.12 Enums

Used for representing fixed sets of constants, such as app states or types:

```java
public enum Status { LOADING, SUCCESS, ERROR }
```

### 2.13 Exception Handling in Android Context

Same `try-catch` principles from Part 1 apply, but Android also has framework-specific exceptions to watch for:

- `NullPointerException` — very common when Views aren't properly initialized.
- `ClassCastException` — when casting incompatible types (e.g., wrong View type).
- `ActivityNotFoundException` — when an `Intent` cannot find a matching Activity.

### 2.14 Summary: Java Concepts Mapped to Android Usage

| Java Concept | Android Application |
|---|---|
| Inheritance | Activities/Fragments/Services extend framework classes |
| Interfaces | Click listeners, callbacks |
| Anonymous classes/Lambdas | Inline event handling |
| Static/Inner classes | ViewHolder pattern in RecyclerView |
| Collections | Displaying dynamic lists of data |
| Generics | Type-safe adapters and async operations |
| Multithreading | Background work without freezing UI |
| Serialization | Passing data between components via Intents |
| Annotations | Metadata for lint/compiler checks |
| Exception handling | Preventing app crashes |

---

*These notes cover foundational Java concepts and how they map directly onto Android app development patterns — a solid base before moving into Android-specific APIs like Activities, Fragments, and the Android lifecycle.*
