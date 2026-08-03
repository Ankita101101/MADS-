# Inheritance using `extends` and `super` Keyword


## 8.1 The `extends` Keyword

`extends` is used to establish inheritance between two classes — the subclass declares which single superclass it inherits from.

```java
class Vehicle {
    int speed;
    void move() { System.out.println("Vehicle moving at " + speed); }
}

class Car extends Vehicle {
    String brand;
}
```

- A subclass automatically gains access to all **non-private** fields and methods of its superclass.
- Java allows a class to extend **only one** superclass directly (single inheritance for classes).
- The subclass can add its own new fields/methods, and can also override inherited methods.

```java
Car c = new Car();
c.speed = 100;  // inherited field
c.move();       // inherited method
```

## 8.2 The `super` Keyword

`super` refers to the immediate parent class object. It has three main uses:

1. Calling the superclass's constructor.
2. Accessing a superclass field that is hidden by a subclass field of the same name.
3. Calling a superclass method that has been overridden.

### 8.2.1 Calling the Superclass Constructor: `super(...)`

```java
class Vehicle {
    int speed;
    Vehicle(int speed) {
        this.speed = speed;
    }
}

class Car extends Vehicle {
    String brand;
    Car(int speed, String brand) {
        super(speed);      // calls Vehicle(int speed)
        this.brand = brand;
    }
}
```

**Rules for `super(...)`:**

- If used, it **must be the first statement** in the subclass constructor.
- If a subclass constructor does not explicitly call `super(...)`, Java **automatically inserts** a call to the superclass's no-argument constructor.
- If the superclass has **no no-argument constructor** and the subclass doesn't explicitly call `super(...)` with matching arguments, a **compile-time error** occurs.

```java
class Vehicle {
    Vehicle(int speed) { } // only a parameterized constructor exists
}

class Car extends Vehicle {
    Car() {
        // ERROR: Vehicle has no no-arg constructor,
        // and this constructor doesn't call super(int) explicitly
    }
}
```

### 8.2.2 Accessing a Hidden Field: `super.field`

If a subclass declares a field with the **same name** as one in the superclass, the subclass field "hides" the superclass one. `super.field` accesses the superclass's version.

```java
class Vehicle {
    String type = "Generic vehicle";
}

class Car extends Vehicle {
    String type = "Car"; // hides Vehicle's 'type'

    void printTypes() {
        System.out.println(type);       // Car
        System.out.println(super.type); // Generic vehicle
    }
}
```

### 8.2.3 Calling an Overridden Method: `super.method()`

If a subclass overrides a method, `super.method()` calls the superclass's original version from within the subclass.

```java
class Vehicle {
    void move() { System.out.println("Vehicle is moving"); }
}

class Car extends Vehicle {
    @Override
    void move() {
        super.move(); // calls Vehicle's move()
        System.out.println("Car is driving");
    }
}
```

Output when `new Car().move()` is called:

```
Vehicle is moving
Car is driving
```

## 8.3 Constructor Call Order in an Inheritance Chain

Whenever a subclass object is created, constructors execute **from the topmost superclass down to the subclass** — the superclass is always fully initialized before the subclass's own constructor body runs.

```java
class A {
    A() { System.out.println("A constructor"); }
}
class B extends A {
    B() { System.out.println("B constructor"); }
}
class C extends B {
    C() { System.out.println("C constructor"); }
}

new C();
// Output:
// A constructor
// B constructor
// C constructor
```

## 8.4 Quick Summary

- `extends` establishes single inheritance between a subclass and one superclass, giving the subclass access to non-private members.
- `super(...)` calls the superclass constructor and must be the first statement; Java inserts it implicitly if omitted.
- `super.field` and `super.method()` access a hidden field or an overridden method from the superclass.
- Constructors run top-down through the inheritance chain: superclass first, subclass last.
