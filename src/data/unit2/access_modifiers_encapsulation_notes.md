# Access Modifiers and Encapsulation


## 4.1 What are Access Modifiers?

Access modifiers control the **visibility/accessibility** of classes, fields, methods, and constructors from other classes or packages. Java provides four levels of access control.

## 4.2 The Four Access Modifiers

| Modifier | Same class | Same package | Subclass (different package) | Different package (non-subclass) |
|---|---|---|---|---|
| `private` | Yes | No | No | No |
| default (no modifier) | Yes | Yes | No | No |
| `protected` | Yes | Yes | Yes | No |
| `public` | Yes | Yes | Yes | Yes |

### `private`

Accessible only within the same class. Used to hide internal implementation details.

```java
class Account {
    private double balance; // cannot be accessed directly from outside this class
}
```

### default (package-private)

No keyword is used. Accessible only within the same package.

```java
class Account {
    double balance; // accessible to other classes in the same package
}
```

### `protected`

Accessible within the same package and by subclasses, even if they are in a different package.

```java
class Account {
    protected double balance;
}
```

### `public`

Accessible from anywhere in the application.

```java
class Account {
    public double balance;
}
```

## 4.3 Applying Access Modifiers

Access modifiers can be applied to:

- **Classes** (top-level classes can only be `public` or default)
- **Fields** (instance/static variables)
- **Methods**
- **Constructors**

```java
public class Account {              // public class
    private double balance;         // private field

    public Account(double balance) { // public constructor
        this.balance = balance;
    }

    private void logTransaction() { // private helper method
        System.out.println("Transaction logged");
    }

    public double getBalance() {    // public method
        return balance;
    }
}
```

## 4.4 What is Encapsulation?

**Encapsulation** is the practice of bundling data (fields) and the methods that operate on that data into a single unit (class), while restricting direct access to the internal state from outside. It is achieved in Java by:

1. Declaring fields as `private`.
2. Providing controlled access through `public` **getter** and **setter** methods.

## 4.5 Implementing Encapsulation

```java
public class Account {
    private double balance; // hidden from direct outside access

    // getter
    public double getBalance() {
        return balance;
    }

    // setter with validation
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("Invalid balance");
        }
    }
}
```

Usage:

```java
Account acc = new Account();
acc.setBalance(500);          // controlled write access
System.out.println(acc.getBalance()); // controlled read access

// acc.balance = -100;        // not allowed — field is private
```

## 4.6 Why Encapsulation Matters

| Benefit | Explanation |
|---|---|
| Data hiding | Internal state is protected from unintended external modification |
| Validation | Setters can enforce rules before updating data (e.g., reject negative balance) |
| Flexibility | Internal implementation can change without affecting external code using the class |
| Maintainability | Clear boundary between a class's public API and its private internals |
| Read-only / write-only control | A field can be exposed with only a getter (read-only) or only a setter (write-only) |

## 4.7 Read-Only Field Example

Omitting the setter makes a field effectively read-only from outside the class:

```java
public class Employee {
    private final String employeeId;

    public Employee(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeId() { // getter only — no setter
        return employeeId;
    }
}
```

## 4.8 Quick Summary

- Java has four access levels: `private`, default, `protected`, and `public` — from most to least restrictive.
- Encapsulation = private fields + public getters/setters.
- It protects internal state, allows validation, and keeps a class's implementation free to change without breaking external code.
