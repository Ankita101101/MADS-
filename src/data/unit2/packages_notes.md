# Packages – Creating and Using Packages

## 13.1 What is a Package?

A **package** is a namespace that groups related classes, interfaces, and sub-packages together. Packages help organize large codebases, avoid naming conflicts, and control access between groups of classes.

## 13.2 Types of Packages

| Type | Description |
|---|---|
| Built-in packages | Provided by Java itself, e.g., `java.util`, `java.io`, `java.lang` |
| User-defined packages | Created by developers to organize their own classes |

`java.lang` is imported automatically into every Java program; all other packages must be explicitly imported.

## 13.3 Creating a Package

A package is created using the `package` keyword, which must be the **very first statement** in the `.java` file (before any imports or class declarations).

```java
// File: Circle.java
package shapes;

public class Circle {
    double radius;
    public double area() {
        return Math.PI * radius * radius;
    }
}
```

### Directory Structure

The package name must match the folder structure where the `.java` file is saved. For `package shapes;`, the file must live inside a folder named `shapes`.

```
project/
└── shapes/
    └── Circle.java
```

For a nested package like `com.example.shapes`, the directory structure mirrors each dot as a subfolder:

```
project/
└── com/
    └── example/
        └── shapes/
            └── Circle.java
```

### Compiling and Running

```
javac -d . Circle.java     // compiles and creates the "shapes" folder structure automatically
java shapes.Circle         // run using the fully qualified class name
```

The `-d` flag tells the compiler where to place the compiled `.class` file according to its package structure.

## 13.4 Using (Importing) a Package

To use a class from another package, it must be **imported** using the `import` keyword, placed after the `package` statement (if any) and before the class declaration.

```java
package main;

import shapes.Circle; // import a single class

public class Test {
    public static void main(String[] args) {
        Circle c = new Circle();
        c.radius = 5;
        System.out.println(c.area());
    }
}
```

### Importing an Entire Package

The wildcard `*` imports all public classes from a package (but not its sub-packages):

```java
import shapes.*; // imports all public classes in the 'shapes' package
```

### Using Fully Qualified Names (Without Import)

A class can also be used directly via its fully qualified name, without an `import` statement:

```java
shapes.Circle c = new shapes.Circle();
```

This is useful when two imported packages contain classes with the same name, to disambiguate which one is meant.

## 13.5 Static Import

A **static import** allows static members (fields/methods) of a class to be used directly, without prefixing the class name.

```java
import static java.lang.Math.*;

double area = PI * radius * radius; // no need to write Math.PI
double root = sqrt(16);             // no need to write Math.sqrt
```

## 13.6 Packages and Access Control

Package boundaries directly affect visibility:

- Default (no modifier) members are accessible **only within the same package**.
- `protected` members are accessible within the same package, and by subclasses in other packages.

(See the Access Modifiers notes for the full visibility table.)

## 13.7 Sub-packages

Java sub-packages are **not automatically included** when importing a parent package — each must be imported explicitly.

```java
import com.example.*;        // does NOT include com.example.shapes.*
import com.example.shapes.*; // must be imported separately
```

## 13.8 Quick Summary

- A package groups related classes/interfaces and must be declared with `package` as the first line in the file.
- The folder structure on disk must match the package name (dots become subfolders).
- Classes from other packages are brought in with `import`, either individually or with a wildcard `*`.
- Fully qualified names can be used instead of `import` to avoid naming conflicts.
- Static imports allow static members to be referenced without the class name prefix.
