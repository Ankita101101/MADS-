# Inheritance – Concept and Types of Inheritance


## 7.1 What is Inheritance?

**Inheritance** is an OOP mechanism where one class (the **subclass**/**child class**) acquires the fields and methods of another class (the **superclass**/**parent class**), using the `extends` keyword. It models an **"is-a"** relationship.

```java
class Animal {
    void eat() {
        System.out.println("This animal eats food");
    }
}

class Dog extends Animal { // Dog "is-a" Animal
    void bark() {
        System.out.println("Dog barks");
    }
}

Dog d = new Dog();
d.eat();  // inherited from Animal
d.bark(); // defined in Dog
```

## 7.2 Why Use Inheritance?

| Benefit | Explanation |
|---|---|
| Code reusability | Common fields/methods are written once in the superclass |
| Method overriding | Subclasses can redefine inherited behavior |
| Logical hierarchy | Models real-world "is-a" relationships cleanly |
| Extensibility | New subclasses can be added without modifying existing code |

## 7.3 The `super` Keyword

`super` refers to the immediate parent class and is used to:

- Call the parent class's constructor: `super(...)`.
- Access the parent class's fields/methods when hidden or overridden.

```java
class Animal {
    String type = "Animal";
    Animal(String type) { this.type = type; }
    void sound() { System.out.println("Some generic sound"); }
}

class Dog extends Animal {
    Dog() {
        super("Mammal");   // calls Animal's constructor
    }
    void sound() {
        super.sound();     // calls Animal's sound()
        System.out.println("Bark");
    }
}
```

## 7.4 Types of Inheritance

### 1. Single Inheritance

One subclass inherits from exactly one superclass.

```java
class Animal { void eat() { } }
class Dog extends Animal { void bark() { } }
```

### 2. Multilevel Inheritance

A class inherits from a class, which itself inherits from another class, forming a chain.

```java
class Animal { void eat() { } }
class Dog extends Animal { void bark() { } }
class Puppy extends Dog { void weep() { } }
```

`Puppy` inherits from `Dog`, which inherits from `Animal` — so `Puppy` has access to methods from both.

### 3. Hierarchical Inheritance

Multiple subclasses inherit from the same single superclass.

```java
class Animal { void eat() { } }
class Dog extends Animal { void bark() { } }
class Cat extends Animal { void meow() { } }
```

Both `Dog` and `Cat` are independent subclasses of `Animal`.

### 4. Multiple Inheritance (Not Supported via Classes)

Java **does not support multiple inheritance with classes** (a class extending more than one class) to avoid the **"diamond problem"** — ambiguity when two parent classes define the same method.

```java
class A { }
class B { }
class C extends A, B { } // COMPILE ERROR — not allowed in Java
```

Java achieves the effect of multiple inheritance instead through **interfaces**, since a class can implement multiple interfaces:

```java
interface Flyable { void fly(); }
interface Swimmable { void swim(); }

class Duck implements Flyable, Swimmable {
    public void fly() { System.out.println("Duck flies"); }
    public void swim() { System.out.println("Duck swims"); }
}
```

### 5. Hybrid Inheritance

A combination of two or more types of inheritance (e.g., hierarchical + multilevel). In Java, hybrid inheritance involving classes is achieved using a mix of class inheritance and interfaces, since direct multiple class inheritance is not allowed.

## 7.5 Key Rules of Inheritance in Java

- A class can extend only **one** superclass (`extends` allows a single class only).
- A class can implement **multiple** interfaces.
- Constructors are **not inherited**, but the parent constructor is invoked implicitly (or explicitly via `super(...)`) when a subclass object is created.
- `private` members of a superclass are **not accessible** directly in the subclass.
- The `final` keyword can be used on a class to **prevent it from being inherited** at all.

```java
final class Utility { } // cannot be extended
```

## 7.6 Quick Summary

- Inheritance lets a subclass acquire fields/methods from a superclass via `extends`, modeling an "is-a" relationship.
- `super` is used to access the parent class's constructor or overridden methods.
- Java supports single, multilevel, and hierarchical inheritance directly through classes.
- Multiple inheritance through classes is not allowed (diamond problem); it is instead achieved through interfaces.
- Hybrid inheritance combines multiple types, typically using interfaces alongside class inheritance.
