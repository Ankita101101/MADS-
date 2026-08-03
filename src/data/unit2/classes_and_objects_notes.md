# Classes and Objects – Fundamentals


## 2.1 What is a Class?

A **class** is a blueprint or template that defines the properties (fields/variables) and behaviors (methods) that its objects will have. A class itself does not occupy memory for data — it only defines the structure.

```java
class Student {
    // fields (state)
    String name;
    int age;

    // method (behavior)
    void display() {
        System.out.println(name + " is " + age + " years old");
    }
}
```

## 2.2 What is an Object?

An **object** is a real instance of a class, created in memory, with its own copy of the class's fields. Objects are created using the `new` keyword.

```java
Student s1 = new Student(); // object creation
s1.name = "Alice";
s1.age = 20;
s1.display();
```

- `Student` — the class (type).
- `s1` — the reference variable pointing to the object.
- `new Student()` — allocates memory for the object on the heap and returns its reference.

## 2.3 Class vs Object

| Class | Object |
|---|---|
| Logical/template entity | Physical/real-world entity |
| Declared once | Multiple objects can be created |
| No memory allocated | Memory allocated on the heap |
| Defines properties and behavior | Holds actual values for properties |

## 2.4 Declaring Fields and Methods

- **Fields** (also called instance variables) hold the state of an object.
- **Methods** define the actions/behavior an object can perform.

```java
class Car {
    String model;   // field
    int speed;       // field

    void accelerate() {   // method
        speed += 10;
    }
}
```

## 2.5 Creating and Using Multiple Objects

Each object maintains its own independent copy of instance variables.

```java
Car car1 = new Car();
Car car2 = new Car();

car1.model = "Sedan";
car2.model = "Hatchback";

System.out.println(car1.model); // Sedan
System.out.println(car2.model); // Hatchback
```

## 2.6 Constructors

A **constructor** is a special method used to initialize an object when it is created. It has the same name as the class and no return type.

```java
class Student {
    String name;
    int age;

    // constructor
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

Student s1 = new Student("Bob", 22); // constructor called automatically
```

### Types of Constructors

| Type | Description |
|---|---|
| Default constructor | No-argument constructor auto-provided by Java if none is defined |
| Parameterized constructor | Accepts arguments to initialize fields with specific values |
| Constructor overloading | Multiple constructors with different parameter lists in the same class |

```java
class Student {
    String name;
    int age;

    Student() {                     // default
        name = "Unknown";
        age = 0;
    }

    Student(String name, int age) { // parameterized
        this.name = name;
        this.age = age;
    }
}
```

## 2.7 The `this` Keyword

`this` refers to the current object instance. It is mainly used to resolve naming conflicts between instance variables and parameters.

```java
Student(String name, int age) {
    this.name = name; // "this.name" is the field, "name" is the parameter
    this.age = age;
}
```

## 2.8 Instance vs Static Members

| Instance member | Static member |
|---|---|
| Belongs to each individual object | Belongs to the class itself, shared by all objects |
| Accessed via object reference (`obj.field`) | Accessed via class name (`ClassName.field`) |
| Separate copy per object | Single copy shared across all objects |

```java
class Counter {
    static int count = 0; // shared across all objects

    Counter() {
        count++;
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
System.out.println(Counter.count); // 2
```

## 2.9 Object Memory Allocation (Brief)

- Objects are created on the **heap**.
- Reference variables (which point to objects) are stored on the **stack**.
- Multiple references can point to the same object (`Student s2 = s1;`), meaning changes through one reference affect the other.

## 2.10 Garbage Collection (Brief)

Java automatically reclaims memory of objects that no longer have any active references, through an automatic **garbage collector** — the programmer does not need to manually free memory.

## 2.11 Quick Summary

- A class defines structure; an object is a concrete instance of that structure.
- Objects are created using `new`, and initialized using constructors.
- Fields hold object-specific data; methods define behavior.
- `this` disambiguates between fields and parameters.
- Static members belong to the class as a whole, not to individual objects.
