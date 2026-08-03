# Constructors – Default and Parameterized Constructors


## 5.1 What is a Constructor?

A **constructor** is a special block of code used to initialize a newly created object. It is automatically invoked when an object is created using the `new` keyword.

### Rules for a Constructor

- Must have the **same name as the class**.
- Has **no return type** (not even `void`).
- Can take parameters, just like a method.
- Cannot be `static`, `final`, or `abstract`.

```java
class Student {
    Student() {
        System.out.println("Constructor called");
    }
}

Student s1 = new Student(); // prints "Constructor called"
```

## 5.2 Constructor vs Method

| Constructor | Method |
|---|---|
| Same name as the class | Any valid name |
| No return type | Must have a return type (or `void`) |
| Called automatically on `new` | Called explicitly |
| Used to initialize an object | Used to define behavior/logic |

## 5.3 Default Constructor

A **default constructor** takes no arguments. If a class defines no constructor at all, Java automatically provides an implicit no-argument constructor that initializes fields to their default values.

```java
class Student {
    String name;
    int age;
    // no constructor written — Java inserts an implicit default constructor
}

Student s1 = new Student();
System.out.println(s1.name); // null
System.out.println(s1.age);  // 0
```

### Explicit Default (No-Argument) Constructor

A no-argument constructor can also be written explicitly to set custom initial values:

```java
class Student {
    String name;
    int age;

    Student() { // explicit default constructor
        name = "Unknown";
        age = 0;
    }
}
```

**Important**: Java only provides the implicit default constructor if **no constructor at all** is defined in the class. As soon as any constructor is written (even a parameterized one), the implicit default constructor is no longer auto-generated.

```java
class Student {
    String name;
    Student(String name) { this.name = name; }
}

Student s1 = new Student(); // ERROR: no default constructor exists anymore
```

## 5.4 Parameterized Constructor

A **parameterized constructor** accepts arguments, allowing an object to be initialized with specific values at the time of creation.

```java
class Student {
    String name;
    int age;

    Student(String name, int age) { // parameterized constructor
        this.name = name;
        this.age = age;
    }
}

Student s1 = new Student("Alice", 20);
Student s2 = new Student("Bob", 22);
```

Each object can be initialized with different values immediately, without needing separate setter calls afterward.

## 5.5 Constructor Overloading

A class can have **multiple constructors** with different parameter lists (different number/type of parameters). Java selects the correct one at compile time based on the arguments passed.

```java
class Student {
    String name;
    int age;

    Student() {                       // no-argument
        this("Unknown", 0);
    }

    Student(String name) {            // one argument
        this(name, 0);
    }

    Student(String name, int age) {   // two arguments
        this.name = name;
        this.age = age;
    }
}

Student s1 = new Student();
Student s2 = new Student("Alice");
Student s3 = new Student("Bob", 22);
```

## 5.6 Constructor Chaining with `this()`

`this()` is used to call **another constructor of the same class**, avoiding duplicated initialization code. It must be the **first statement** in the constructor.

```java
Student() {
    this("Unknown", 0); // calls the two-argument constructor
}
```

## 5.7 Copy Constructor (Java Convention)

Java has no built-in copy constructor syntax (unlike C++), but the same effect is achieved by writing a constructor that takes another object of the same class as a parameter.

```java
class Student {
    String name;
    int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    Student(Student other) { // acts as a copy constructor
        this.name = other.name;
        this.age = other.age;
    }
}

Student s1 = new Student("Alice", 20);
Student s2 = new Student(s1); // independent copy of s1's values
```

## 5.8 Quick Summary

- A constructor initializes an object and shares the class's name with no return type.
- If no constructor is written, Java auto-generates a default (no-argument) constructor.
- Writing any constructor removes the auto-generated default — it must then be written explicitly if still needed.
- A parameterized constructor lets objects be initialized with specific values at creation.
- Constructor overloading allows multiple constructors differing by parameters; `this()` chains between them to avoid repeated code.
