# Constructor Overloading and Object Initialization


## 6.1 Constructor Overloading — Recap and Rules

Constructor overloading means defining multiple constructors in the same class, each with a **different parameter list** (different number, type, or order of parameters). The compiler picks the matching constructor based on the arguments supplied at the call site.

```java
class Rectangle {
    int length, width;

    Rectangle() {                     // no-argument
        length = 1;
        width = 1;
    }

    Rectangle(int side) {             // one argument — square
        length = side;
        width = side;
    }

    Rectangle(int length, int width) { // two arguments
        this.length = length;
        this.width = width;
    }
}
```

### Overload Resolution Rules

- Constructors are distinguished by **signature** (number/type/order of parameters), not by parameter names.
- Return type does not apply (constructors have none), so it cannot be used to differentiate them.
- Java matches the call to the constructor whose parameter list fits the arguments' types (with automatic widening, e.g., `int` to `double`, applied if no exact match exists).

```java
Rectangle r1 = new Rectangle();       // matches no-arg constructor
Rectangle r2 = new Rectangle(5);      // matches one-arg constructor
Rectangle r3 = new Rectangle(4, 6);   // matches two-arg constructor
```

### Ambiguous Overloads

If two constructors could both match a call equally well (e.g., after automatic type widening), the compiler raises an **ambiguous method call** error.

```java
Rectangle(int a, long b) { }
Rectangle(long a, int b) { }

new Rectangle(5, 5); // ERROR: ambiguous — both widen equally, compiler cannot choose
```

## 6.2 Object Initialization Order

When an object is created with `new`, Java initializes it in a strict sequence, **before** the constructor's own body runs:

1. **Default values** are assigned to all fields (`0`, `0.0`, `false`, `null`).
2. **Instance variable initializers** and **instance initializer blocks** run, in the order they appear in the class.
3. The **constructor body** executes last.

```java
class Demo {
    int x = 10;              // instance variable initializer

    {
        System.out.println("Instance block, x = " + x); // instance initializer block
    }

    Demo() {
        System.out.println("Constructor body, x = " + x);
    }
}

new Demo();
// Output:
// Instance block, x = 10
// Constructor body, x = 10
```

This order holds true **regardless of which overloaded constructor is called** — instance initializers always run first, then the chosen constructor's body.

## 6.3 Initialization via Overloaded Constructors

Overloading gives flexibility in *how* an object can be initialized at creation time, while the initialization order in 6.2 still applies identically to every overload:

```java
class Rectangle {
    int length = 1, width = 1; // instance initializers — default values

    Rectangle() { }             // uses the initializer defaults above

    Rectangle(int side) {
        length = side;
        width = side;
    }

    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }
}
```

Regardless of which constructor is invoked, `length` and `width` are first set to `1` by the field initializers, and then possibly overwritten by the chosen constructor's body.

## 6.4 Chaining Overloaded Constructors with `this()`

To avoid repeating initialization logic across overloaded constructors, one constructor can delegate to another using `this(...)` as its **first statement**:

```java
class Rectangle {
    int length, width;

    Rectangle() {
        this(1, 1); // delegates to two-arg constructor
    }

    Rectangle(int side) {
        this(side, side); // delegates to two-arg constructor
    }

    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }
}
```

This ensures all overloads funnel through one central initialization path, reducing duplicated code.

## 6.5 Quick Summary

- Constructor overloading = same class, multiple constructors, differing parameter lists; the compiler resolves the correct one by matching argument types.
- Ambiguous calls (where two overloads match equally) cause a compile-time error.
- Object initialization always follows the same order: default values → instance initializers → constructor body — no matter which overload is called.
- `this(...)` chains overloaded constructors together to centralize initialization logic.
