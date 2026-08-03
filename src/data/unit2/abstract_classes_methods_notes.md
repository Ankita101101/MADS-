# Abstract Classes and Abstract Methods

## 11.1 What is an Abstract Class?

An **abstract class** is a class declared with the `abstract` keyword that **cannot be instantiated directly**. It exists to be extended, providing a common base with some implemented behavior and some behavior left for subclasses to define.

```java
abstract class Shape {
    // regular field
    String color;

    // regular (concrete) method
    void displayColor() {
        System.out.println("Color: " + color);
    }

    // abstract method — no body
    abstract double area();
}
```

```java
Shape s = new Shape(); // COMPILE ERROR: cannot instantiate an abstract class
```

## 11.2 What is an Abstract Method?

An **abstract method** is a method declared without a body, ending with a semicolon instead of `{ }`. It only specifies the method's signature — subclasses are **required** to provide the implementation.

```java
abstract double area(); // no method body
```

### Rules for Abstract Methods

- Can only exist inside an abstract class (or an interface).
- Cannot be `private`, `static`, or `final` (since it must be overridden by a subclass).
- Any class containing at least one abstract method **must itself be declared abstract**.

## 11.3 Extending an Abstract Class

A concrete (non-abstract) subclass **must override every abstract method** it inherits, or it must also be declared `abstract` itself.

```java
class Circle extends Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

Circle c = new Circle(5);
c.displayColor(); // inherited concrete method
System.out.println(c.area()); // implemented abstract method
```

If `Circle` failed to implement `area()`, it would need to be declared `abstract class Circle extends Shape` itself.

## 11.4 Abstract Classes Can Have Both Abstract and Concrete Methods

Unlike interfaces (prior to Java 8), abstract classes can freely mix:

- Fully implemented (concrete) methods.
- Abstract methods with no implementation.
- Constructors (used when a subclass is created, via `super()`).
- Instance fields, static fields, and static methods.

```java
abstract class Employee {
    String name;

    Employee(String name) { // abstract classes can have constructors
        this.name = name;
    }

    void showName() {       // concrete method
        System.out.println("Name: " + name);
    }

    abstract double calculateSalary(); // abstract method
}
```

## 11.5 Why Use Abstract Classes?

| Reason | Explanation |
|---|---|
| Enforce a contract | Forces subclasses to implement specific behavior (e.g., every `Shape` must define `area()`) |
| Share common code | Concrete methods/fields avoid duplicating shared logic across subclasses |
| Prevent meaningless instantiation | A generic `Shape` or `Employee` on its own doesn't make sense as a standalone object |
| Partial abstraction | Allows some behavior to be fixed while leaving specific parts to be defined later |

## 11.6 Abstract Class vs Regular (Concrete) Class

| Abstract class | Regular class |
|---|---|
| Cannot be instantiated | Can be instantiated |
| Can contain abstract methods (no body) | Cannot contain abstract methods |
| May mix implemented and unimplemented methods | All methods must be fully implemented |
| Meant to be extended | Can be used standalone or extended |

## 11.7 Quick Summary

- An abstract class cannot be instantiated and is declared using the `abstract` keyword.
- Abstract methods have no body and must be implemented by any concrete subclass.
- Abstract classes can still have constructors, fields, static members, and fully implemented methods alongside abstract ones.
- They are used to enforce a common contract across subclasses while sharing reusable code.
