# Method Overriding and Runtime Behavior


## 9.1 What is Method Overriding?

**Method overriding** occurs when a subclass provides its own implementation of a method that is already defined in its superclass, using the **same name, same parameters, and same return type** (or a covariant return type).

```java
class Animal {
    void sound() {
        System.out.println("Some generic sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}
```

## 9.2 Rules for Method Overriding

- The method must have the **same name and same parameter list** as in the superclass.
- The return type must be the **same**, or a **covariant type** (a subclass of the original return type).
- The access modifier in the subclass **cannot be more restrictive** than in the superclass (e.g., cannot override a `public` method with `protected`).
- `static`, `final`, and `private` methods **cannot be overridden**:
  - `static` methods are **hidden**, not overridden (resolved at compile time based on reference type).
  - `final` methods cannot be changed by subclasses at all.
  - `private` methods are not inherited, so there is nothing to override.
- Constructors are **never** overridden.

```java
class Animal {
    protected Animal reproduce() { return new Animal(); }
}

class Dog extends Animal {
    @Override
    public Dog reproduce() { return new Dog(); } // covariant return type and wider access — both allowed
}
```

## 9.3 The `@Override` Annotation

`@Override` is optional but strongly recommended. It tells the compiler to verify that the method actually overrides a superclass method, catching mistakes (like typos in the method signature) at compile time instead of silently creating a new, unrelated method.

```java
class Dog extends Animal {
    @Override
    void sond() { } // COMPILE ERROR: no such method to override in Animal — typo caught immediately
}
```

## 9.4 Overriding vs Overloading

| Overriding | Overloading |
|---|---|
| Same class hierarchy (superclass/subclass) | Same class (or same class hierarchy) |
| Same method name, same parameters | Same method name, different parameters |
| Resolved at **runtime** | Resolved at **compile time** |
| Achieves runtime polymorphism | Achieves compile-time polymorphism |

## 9.5 Runtime Behavior: Dynamic Method Dispatch

When a superclass reference variable holds a subclass object, the **actual method that runs is determined at runtime**, based on the object's real type — not the reference's declared type. This is called **dynamic method dispatch** and is the basis of **runtime polymorphism**.

```java
Animal a = new Dog(); // reference type: Animal, actual object: Dog
a.sound();             // "Bark" — Dog's overridden version runs, not Animal's
```

Even though `a` is declared as type `Animal`, the JVM checks the actual object at runtime (`Dog`) and calls its overridden `sound()` method.

## 9.6 Why This Matters: Polymorphic Behavior

Dynamic dispatch allows a single method call to behave differently depending on the actual object, without the calling code needing to know the exact subclass in advance.

```java
Animal[] animals = { new Dog(), new Cat(), new Animal() };

for (Animal a : animals) {
    a.sound(); // calls the correct overridden version for each actual object
}
// Output:
// Bark
// Meow
// Some generic sound
```

## 9.7 Static Binding vs Dynamic Binding

| Static binding (compile-time) | Dynamic binding (runtime) |
|---|---|
| Used for `static`, `private`, and `final` methods, and fields | Used for overridden instance methods |
| Resolved using the **reference type** | Resolved using the **actual object type** |
| Faster (decided at compile time) | Slightly slower (decided during execution) |

```java
class Animal {
    static void staticMethod() { System.out.println("Animal static"); }
}
class Dog extends Animal {
    static void staticMethod() { System.out.println("Dog static"); } // hides, doesn't override
}

Animal a = new Dog();
a.staticMethod(); // "Animal static" — resolved by reference type, not dynamic dispatch
```

**Note**: fields also use static binding — accessing a field through a superclass reference always gets the superclass's field, even if the subclass hides it with a same-named field.

## 9.8 Quick Summary

- Overriding lets a subclass redefine a superclass method with an identical signature, enabling runtime polymorphism.
- `@Override` helps the compiler catch mistakes early.
- Overriding is resolved at runtime (dynamic dispatch) based on the actual object type; overloading is resolved at compile time.
- `static`, `private`, and `final` methods, along with fields, use static (compile-time) binding based on reference type — they are not subject to dynamic dispatch.
