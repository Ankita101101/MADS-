# Interfaces and Multiple Inheritance using Interfaces

## 12.1 What is an Interface?

An **interface** is a fully abstract type that defines a contract of methods a class must implement, using the `interface` keyword. A class uses `implements` (not `extends`) to fulfill an interface's contract.

```java
interface Drawable {
    void draw(); // implicitly public and abstract
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}
```

## 12.2 Rules of Interfaces

- All methods are implicitly `public abstract` unless marked `default`, `static`, or `private` (Java 8+).
- All fields are implicitly `public static final` (i.e., constants) — an interface cannot have regular instance fields.
- Interfaces cannot be instantiated directly.
- A class implementing an interface **must implement all its abstract methods**, or the class itself must be declared `abstract`.

```java
interface Constants {
    int MAX_VALUE = 100; // implicitly public static final
}
```

## 12.3 Default and Static Methods (Java 8+)

Interfaces can include method bodies for two special kinds of methods:

```java
interface Vehicle {
    void start(); // abstract

    default void honk() {              // default method — has a body
        System.out.println("Beep beep!");
    }

    static void showInfo() {           // static method — has a body
        System.out.println("Vehicles must implement start()");
    }
}
```

- **`default` methods** provide a fallback implementation that implementing classes can use as-is or override.
- **`static` methods** belong to the interface itself and are called using the interface name (`Vehicle.showInfo()`), not through an implementing object.

## 12.4 Multiple Inheritance using Interfaces

Java does not allow a class to `extend` more than one class, but a class **can implement multiple interfaces**, which is how Java achieves the effect of multiple inheritance.

```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() { System.out.println("Duck flies"); }

    @Override
    public void swim() { System.out.println("Duck swims"); }
}
```

```java
Duck d = new Duck();
d.fly();
d.swim();
```

## 12.5 The Diamond Problem and How Interfaces Resolve It

The **diamond problem** occurs when a class inherits the same method from two different sources and the compiler can't tell which version to use. Java avoids this ambiguity with abstract methods (no body means no conflict), but it can still arise with **default methods**:

```java
interface A {
    default void greet() { System.out.println("Hello from A"); }
}

interface B {
    default void greet() { System.out.println("Hello from B"); }
}

class C implements A, B {
    // COMPILE ERROR if greet() is not overridden — ambiguous which default to use

    @Override
    public void greet() {
        A.super.greet(); // explicitly choosing A's version
        System.out.println("Hello from C");
    }
}
```

Java forces the implementing class to resolve the conflict explicitly by overriding the method, rather than guessing — this keeps multiple inheritance safe.

## 12.6 Interface vs Abstract Class

| Interface | Abstract class |
|---|---|
| Uses `implements` | Uses `extends` |
| A class can implement **multiple** interfaces | A class can extend only **one** abstract class |
| Fields are implicitly `public static final` | Can have any type of instance field |
| No constructors | Can have constructors |
| Methods are abstract by default, plus `default`/`static` bodies (Java 8+) | Can freely mix abstract and fully implemented methods |
| Represents a **capability/contract** ("can-do") | Represents an **is-a relationship** with shared state/behavior |

## 12.7 Quick Summary

- An interface defines a contract of methods that implementing classes must fulfill, using `implements`.
- Fields in an interface are constants by default; methods are abstract unless marked `default` or `static`.
- A class can implement multiple interfaces, which is how Java achieves multiple inheritance safely.
- Conflicting `default` methods from different interfaces must be explicitly resolved by overriding, avoiding the diamond problem.
