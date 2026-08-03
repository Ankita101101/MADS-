# Creating Classes, Objects, and Memory Allocation


## 3.1 Creating a Class

The general syntax for defining a class in Java:

```java
[access_modifier] class ClassName {
    // fields
    // constructors
    // methods
}
```

Example:

```java
public class Book {
    String title;
    double price;

    void showDetails() {
        System.out.println(title + " costs $" + price);
    }
}
```

Rules to remember:
- One public class per `.java` file, and the filename must match that class name (`Book.java`).
- A class can contain fields, constructors, methods, and even other classes (nested classes).

## 3.2 Creating an Object

An object is created using the `new` keyword, which does two things:
1. Allocates memory on the **heap** for the object.
2. Calls the class's constructor to initialize that memory.

```java
Book b1 = new Book();
```

Breaking this line down:

| Part | Meaning |
|---|---|
| `Book` | Type of the reference variable |
| `b1` | Reference variable stored on the **stack** |
| `new Book()` | Creates the actual object on the **heap** and invokes the constructor |
| `=` | Assigns the heap object's memory address to `b1` |

### Steps the JVM performs on `new Book()`

1. Memory is allocated on the heap for the object's fields.
2. Fields are initialized to default values (`0`, `null`, `false`, etc.).
3. The constructor executes, assigning actual values.
4. A reference (memory address) to this heap object is returned and stored in the stack variable.

## 3.3 Stack vs Heap Memory

| Stack | Heap |
|---|---|
| Stores method calls, local variables, and reference variables | Stores actual objects and their instance data |
| Memory is allocated/freed automatically as methods are called/return | Memory persists until no references point to the object |
| Fast access | Comparatively slower access |
| Fixed size per thread; can cause `StackOverflowError` | Larger, shared across the application; can cause `OutOfMemoryError` |

```java
void createBook() {
    Book b1 = new Book(); // 'b1' reference -> stack
                          // actual Book object -> heap
}
```

## 3.4 Multiple References to the Same Object

Assigning one reference variable to another does **not** copy the object — both variables point to the same memory location on the heap.

```java
Book b1 = new Book();
Book b2 = b1;      // b2 now points to the SAME object as b1

b2.price = 500;
System.out.println(b1.price); // 500 (b1 is affected too)
```

To create an actual independent copy, a new object must be explicitly created (e.g., via a copy constructor or `clone()`).

## 3.5 Null References

A reference variable that does not point to any object holds the value `null`.

```java
Book b3 = null;
b3.showDetails(); // throws NullPointerException at runtime
```

Accessing fields/methods on a `null` reference is one of the most common runtime errors in Java.

## 3.6 Object Lifecycle

1. **Creation** — memory allocated via `new`, constructor runs.
2. **In use** — object is accessed/modified through its reference(s).
3. **Unreachable** — no reference variables point to the object anymore (e.g., reference reassigned or goes out of scope).
4. **Garbage collected** — JVM reclaims the memory automatically.

```java
Book b1 = new Book();
b1 = null; // original Book object is now unreachable -> eligible for garbage collection
```

## 3.7 Garbage Collection (GC)

Java manages heap memory automatically through the **Garbage Collector**, so developers do not manually free memory (unlike C/C++'s `free()`/`delete`).

- The GC periodically scans the heap for objects with no active references.
- Such unreachable objects are removed, and their memory is reclaimed.
- GC runs automatically, but `System.gc()` can be used to *suggest* (not guarantee) garbage collection.

```java
System.gc(); // just a request/hint to JVM, not a command
```

**Benefit**: prevents most memory leaks and manual memory management errors common in other languages.

**Caveat**: objects can still "leak" in Java if references are unintentionally kept alive (e.g., static collections that keep growing).

## 3.8 Quick Summary

- A class is created with the `class` keyword; an object is created with `new`.
- `new` allocates memory on the heap and triggers the constructor.
- Reference variables live on the stack and point to heap objects.
- Copying a reference does not copy the object — both variables share the same memory.
- Unreachable objects are automatically cleaned up by the garbage collector.
