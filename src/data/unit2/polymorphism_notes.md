# Polymorphism – Compile-Time and Run-Time

## 10.1 What is Polymorphism?

**Polymorphism** ("many forms") is the ability of an object, method, or reference to behave differently depending on the context in which it is used. In Java, it comes in two forms:

| Type | Also called | Achieved through | Resolved at |
|---|---|---|---|
| Compile-time polymorphism | Static polymorphism | Method overloading | Compile time |
| Run-time polymorphism | Dynamic polymorphism | Method overriding | Runtime |

## 10.2 Compile-Time Polymorphism (Method Overloading)

The same method name is defined multiple times in a class with **different parameter lists**. The compiler decides which version to call based on the arguments used at the call site — before the program even runs.

```java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

Calculator calc = new Calculator();
calc.add(2, 3);        // calls int version
calc.add(2.5, 3.5);    // calls double version
calc.add(1, 2, 3);     // calls three-argument version
```

Because the compiler determines the exact method at compile time based on argument types, this is also called **static binding**.

## 10.3 Run-Time Polymorphism (Method Overriding)

A subclass provides its own implementation of a method already defined in its superclass, with the **same signature**. Which version actually executes is decided **while the program is running**, based on the real object type — not the reference type.

```java
class Shape {
    double area() { return 0; }
}

class Circle extends Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    @Override
    double area() { return Math.PI * radius * radius; }
}

class Square extends Shape {
    double side;
    Square(double side) { this.side = side; }
    @Override
    double area() { return side * side; }
}
```

```java
Shape s1 = new Circle(5);
Shape s2 = new Square(4);

System.out.println(s1.area()); // Circle's area() runs
System.out.println(s2.area()); // Square's area() runs
```

Both `s1` and `s2` are declared as type `Shape`, yet each calls a different `area()` implementation — decided at runtime by the object's actual type. This is also called **dynamic binding** or **dynamic method dispatch**.

## 10.4 Upcasting and Downcasting

Runtime polymorphism relies on assigning a subclass object to a superclass reference — called **upcasting**. It happens automatically and safely.

```java
Shape s = new Circle(5); // upcasting — implicit and safe
```

**Downcasting** converts a superclass reference back to a subclass type, and must be done explicitly, since it can fail at runtime if the object isn't actually of that subclass:

```java
Circle c = (Circle) s;          // downcasting — explicit
if (s instanceof Circle) {      // safe check before downcasting
    Circle c2 = (Circle) s;
}
```

## 10.5 Polymorphism with an Array/Collection of Objects

A common practical use of runtime polymorphism is processing different subclass objects uniformly through a common superclass type:

```java
Shape[] shapes = { new Circle(3), new Square(4) };

for (Shape shape : shapes) {
    System.out.println(shape.area()); // correct overridden version runs for each
}
```

The calling code doesn't need to know or check each shape's exact type — it simply relies on each object providing its own correct behavior.

## 10.6 Key Differences: Compile-Time vs Run-Time Polymorphism

| Aspect | Compile-time (overloading) | Run-time (overriding) |
|---|---|---|
| Achieved via | Same method name, different parameters | Same method name, same parameters, in subclass |
| Binding | Static (early) binding | Dynamic (late) binding |
| Decided by | Argument types at compile time | Actual object type at runtime |
| Inheritance required? | No | Yes (needs a superclass-subclass relationship) |
| Performance | Slightly faster (resolved early) | Slightly slower (resolved during execution) |
| Flexibility | Fixed once compiled | Behavior can vary at runtime based on object |

## 10.7 Quick Summary

- Polymorphism allows the same method name or reference to behave differently depending on context.
- Compile-time polymorphism = overloading, resolved by the compiler using argument types (static binding).
- Run-time polymorphism = overriding, resolved using the actual object type while the program executes (dynamic binding).
- Upcasting (subclass → superclass reference) is implicit; downcasting (superclass → subclass reference) is explicit and should be guarded with `instanceof`.
