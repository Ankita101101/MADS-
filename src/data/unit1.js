const androidIntroductionSubtopics = [
  { heading: "Introduction to Android and Android Applications", notes: `
Lecture Notes | Mobile Application Development | Introductory Session
` },
  { heading: "Learning Objectives", notes: `
By the end of this lecture, you should be able to:
1. Explain what Android is and where it is used.
2. Describe the layered architecture of the Android OS.
3. Identify the four core building blocks of an Android app.
4. Explain the purpose of the Android Manifest file.
5. Understand a typical Android Studio project structure.
6. Describe the Activity lifecycle and why it matters.
7. Identify basic UI components and layout types.
8. Understand the tools used to build and ship an Android app.
` },
  { heading: "What is Android?", notes: `
Android is a mobile operating system developed by Google, built on top of a modified Linux kernel. It was designed primarily for touchscreen devices and has since expanded across many device categories.

Key Characteristics:
• Open-source: core released as the Android Open Source Project (AOSP).
• Linux-based: relies on the Linux kernel for core system services.
• Developed by Google, with the Open Handset Alliance.

A Brief History: Android versions were historically named after desserts — Cupcake, Donut, Eclair … up to Pie — before Google moved to numbered releases (Android 10 onward). Android has become the world's most widely installed operating system, spanning phones, tablets, and far beyond.
` },
  { heading: "Where Android Runs", notes: `
Android has expanded far beyond the smartphone.
• Phones & Tablets — The original and most common form factor.
• Android TV — Smart TVs and streaming devices.
• Wear OS — Smartwatches and wearables.
• Android Auto — In-vehicle infotainment systems.
• IoT / Embedded — Connected and embedded devices.
` },
  { heading: "Android Architecture", notes: `
A layered stack — each layer relies on the one below it.
• System Apps — Pre-installed apps (Phone, Contacts, Settings) and user-installed apps.
• Java API Framework — Building blocks developers use directly — Activity Manager, View System, and more.
• Android Runtime (ART) & Native Libraries — Executes app bytecode (AOT/JIT); native C/C++ libraries such as SQLite and WebKit.
• Hardware Abstraction Layer — Standard interfaces exposing device hardware to the framework above.
• Linux Kernel — Core services: process and memory management, drivers, power management, and security.
` },
  { heading: "Core Building Blocks of an App", notes: `
Every Android app is composed of one or more of these four components.
• Activity — A single screen with a user interface, such as an inbox screen.
• Service — Runs in the background without a UI, such as playing music.
• Broadcast Receiver — Responds to system-wide events, such as “battery low”.
• Content Provider — Manages and shares structured app data, such as contacts.
` },
  { heading: "The Android Manifest File", notes: `
Every project includes an AndroidManifest.xml at its root — the app's identity card, read by the build tools, the OS, and Google Play before the app ever runs.
1. The app's unique package name.
2. All Activities, Services, Broadcast Receivers, and Content Providers.
3. Permissions the app requires, such as camera, internet, and location.
4. Required hardware and software features.
5. Minimum and target API (SDK) levels.
6. App icon, label, and theme.
` },
  { heading: "Android Studio Project Structure", notes: `
The official IDE is built on IntelliJ IDEA.

manifests/ — Contains AndroidManifest.xml.
java/ (or kotlin/) — Source code: Activities, Services, and other classes.
res/layout/ — XML files defining screen layouts.
res/values/ — Strings, colors, dimensions, and styles.
res/drawable/ — Images and drawable resources.
build.gradle — Build configuration: dependencies, SDK versions, and build settings.

Apps can be written in Java or Kotlin. Kotlin is now Google's preferred language, though Java remains common in legacy codebases.
` },
  { heading: "The Activity Lifecycle", notes: `
How a screen behaves as users navigate through the app.
1. onCreate() — Activity is first created; initial setup, such as inflating the layout.
2. onStart() — Activity becomes visible to the user.
3. onResume() — Activity gains focus and starts interacting with the user.
4. onPause() — The system is about to resume another Activity; commit unsaved changes.
5. onStop() — Activity is no longer visible.
6. onDestroy() — Activity is destroyed by the system or user action.

Why it matters: Android can destroy and recreate an Activity, for example on screen rotation. Apps must save and restore state correctly to avoid data loss or crashes.
` },
  { heading: "UI Basics: Layouts", notes: `
Layouts define how UI elements (views) are arranged on the screen.
• LinearLayout — Arranges children in a single row or column.
• RelativeLayout — Positions children relative to each other or the parent.
• ConstraintLayout — Flexible, constraint-based layout; recommended for most new UIs.

Common Views / Widgets:
• TextView — Displays text.
• Button — A clickable action trigger.
• EditText — An input field for text.
• ImageView — Displays an image or icon.

Modern apps increasingly use Jetpack Compose — a Kotlin-based declarative UI toolkit — alongside or instead of XML layouts.
` },
  { heading: "Development Tools & Packaging", notes: `
• Android Studio — The official IDE, built on IntelliJ IDEA, for code editing, debugging, and UI design.
• Android SDK — Libraries and tools needed to build, test, and debug apps.
• Gradle — Build automation that compiles code, manages dependencies, and packages the app.
• Emulator / Device — Test on a virtual device in Android Studio or a real phone via USB.

Packaging & Distribution:
• APK (Android Package) — The traditional install/distribution format.
• AAB (Android App Bundle) — The modern format required by Google Play; the Play Store builds optimized APKs per device.
• Apps are typically distributed via the Google Play Store, though direct installs (sideloading) are also possible.
` },
  { heading: "Permissions", notes: `
Certain app capabilities, such as accessing the camera, contacts, or location, require explicit user permission.

Since Android 6.0 (API level 23), many permissions are requested at runtime rather than only at install time, giving users more granular control over their privacy.
` },
  { heading: "Key Takeaways", notes: `
✓ Android is a Linux-based, open-source OS used across many device categories.
✓ Architecture is layered: Kernel → HAL → Runtime/Native Libraries → Java API Framework → System Apps.
✓ Every app is built from four components: Activities, Services, Broadcast Receivers, and Content Providers.
✓ The Manifest declares what an app contains and what it needs to run.
✓ The Activity lifecycle governs how screens behave as users navigate the app.
✓ UI is built with layouts and views via XML or the newer Jetpack Compose.
✓ Android Studio, the SDK, and Gradle form the core development toolchain.
` },
  { heading: "Suggested Next Steps", notes: `
1. Install Android Studio and create a first “Hello World” project.
2. Explore the generated project — find the Manifest, layouts, and MainActivity.
3. Run the app on an emulator and observe the lifecycle by rotating the device.
` },
];

const softwareDesignSubtopics = [
  { heading: "Software Design", notes: `
Explore the crucial phase of software design, transforming requirements into a detailed blueprint for development. We'll cover the process, key characteristics, and essential tools like Design Structure Charts.
` },
  { heading: "The Essence of Software Design", notes: `
Input & Output: Software design translates the Software Requirements Specification (SRS) into a Software Design Document (SDD), detailing the "how" a problem will be solved.

Creative Problem-Solving: This phase is highly creative, focusing on devising innovative solutions and defining the architecture, components, interfaces, and data for a system.

A well-crafted SDD ensures all requirements from the SRS are addressed and provides a complete picture of the system's data, functional, and behavioral aspects.
` },
  { heading: "Characteristics of a Good SDD", notes: `
• Completeness: Must encompass all requirements from the SRS, leaving no ambiguity regarding system functionality and constraints.
• Readability & Maintainability: Easy to understand for all stakeholders, simplifying future updates, bug fixes, and system enhancements.
• Holistic View: Describes the entire system, covering data flows, functional components, and behavioral interactions comprehensively.
` },
  { heading: "The 3-Step Design Process", notes: `
Software design progresses through distinct phases, each with a unique focus.

• Interface Design: Views the system as a "black box," defining interactions with its environment. Focuses on inputs and outputs as per user requirements and the SRS.
• Architectural Design: Identifies major modules, their responsibilities, and communication mechanisms. Emphasizes coupling and cohesion between modules, treating them as black boxes.
• Detailed Design: Defines the internal elements of each module: functions, processing methods, data structures, and algorithms. This is the lowest-level design phase.
` },
  { heading: "Embracing Modularity", notes: `
A modular architecture breaks down a system into independent, conceptually simple units that interact through well-defined interfaces.

• Easy to understand and explain
• Simple to design and document
• Streamlines coding and testing
• Enhances maintainability
` },
  { heading: "Visualizing Design with Structure Charts", notes: `
Structure Charts visually represent the hierarchical organization of software modules, breaking down complex systems into their lowest functional components.

• Data Flow: Indicated by directed arrows with an empty circle, showing the movement of data between modules.
• Control Flow: Represented by directed arrows with a filled circle, illustrating the flow of control between modules.
• Physical Storage: Depicts locations where information is stored, crucial for data management within the system.
(Diagram shows a sample hierarchical structure chart with placeholder module labels.)
` },
  { heading: "Benefits of Design Structure Charts", notes: `
• Improved System Understanding: Provides a clear overview of the software architecture, making complex systems easier to grasp.
• Simplified Communication: Fosters better collaboration and reduces misunderstandings among team members.
• Early Issue Identification: Helps pinpoint potential problems and dependencies before coding commences, saving time and resources.
• Supports Maintainable Design: Promotes modular and well-structured software, simplifying future maintenance and enhancements.
` },
  { heading: "Software Design Principles", notes: `
A Guide for Junior Developers
` },
  { heading: "Agenda", notes: `
• Pseudocode Essentials: Understanding the blueprint before building the house.
• Coupling & Cohesion: Key metrics for modularity and maintainable code.
• Design Approaches: Exploring Top-Down and Bottom-Up strategies.
• Estimation Models: Predicting project time and cost accurately.
` },
  { heading: "Pseudocode: The Algorithm's Blueprint", notes: `
Pseudocode is an informal, high-level description of an algorithm or program. It blends natural language with programming constructs, focusing on logic rather than syntax. This clarity helps developers:
• Plan and outline algorithms effectively.
• Facilitate discussions and reviews among teams.
• Bridge the gap between human thought and formal code.
` },
  { heading: "Coupling & Cohesion: Pillars of Modularity", notes: `
These two parameters are crucial for evaluating the quality of modularity in software design, directly impacting maintainability and scalability.

• Coupling: Measures the degree of interdependence between software modules. Lower coupling is generally preferred, indicating less reliance on other modules.
• Cohesion: Indicates the functional strength within a single module. High cohesion means a module's elements work together to achieve a single, well-defined purpose.
` },
  { heading: "Understanding Coupling Types", notes: `
Coupling measures how interconnected modules are. Lower coupling generally indicates a more robust and flexible design.

1. Data Coupling (best) — Modules share data through parameters.
2. Stamp Coupling — Modules share composite data structures.
3. Control Coupling — One module passes control information to another.
4. External Coupling — Modules depend on external entities (e.g., hardware).
5. Common Coupling — Modules share a global data area.
6. Content Coupling (worst) — One module modifies another's internal data.
` },
  { heading: "Exploring Cohesion Types", notes: `
Cohesion defines how functionally unified a module is. Higher cohesion implies better design and easier maintenance.

1. Functional Cohesion (high) — All elements contribute to a single, well-defined task.
2. Sequential Cohesion — Output of one element is input to the next.
3. Communicational Cohesion — Elements operate on the same input/output data.
4. Procedural Cohesion — Elements are grouped based on execution order.
5. Temporal Cohesion — Elements are related by time (e.g., initialization).
6. Logical Cohesion — Elements perform similar functions, selected by flag.
7. Coincidental Cohesion (low) — Elements have no meaningful relationship.
` },
  { heading: "Design Approaches", notes: `
Top-Down Approach
• Concept: Decompose a large problem into smaller, manageable sub-problems, repeating until easily solvable units are achieved.
• Advantages: Systematic, modular architecture, easier to understand, aligns with user requirements, predictable cost/time.
• Best For: Small to medium-sized projects.
• Disadvantage: Difficult for very complex, large problems where the whole cannot be grasped initially.

Bottom-Up Approach
• Concept: Solve individual sub-problems first, then integrate them to build the complete solution incrementally.
• Advantages: Suitable for large, complex projects, incremental development ease for designers.
• Best For: Large-scale projects with evolving requirements.
• Disadvantage: Can lead to complex, harder-to-manage architecture due to iterative integration.
` },
  { heading: "Estimation Models", notes: `
Accurate estimation of time and cost is critical for successful project delivery.

• Post Estimation: Refining estimates based on actual project data and lessons learned from past projects.
• Base Estimation: Initial high-level estimates derived from preliminary project scope and requirements.
• Decomposition: Breaking down complex tasks into smaller, more manageable components for individual estimation.
• Empirical Models: Utilizing historical data and mathematical formulas (e.g., COCOMO) to predict effort and duration.
` },
];

const allUnit1Cards = [
  {
    id: 1,

    title: "1. Fundamentals of Android Application Development",

    short:
      "Overview of mobile computing and mobile application development.",

    subtopics: [

      {
        heading: "1. What is Mobile Computing?",

        notes: `
Mobile Computing is a technology that allows transmission of data, voice, and video via a computer or any other wireless-enabled device without being connected to a fixed physical link. It refers to the use of portable computing devices (such as smartphones, tablets, and laptops) in conjunction with mobile communication technologies, enabling users to access and process information from anywhere, at any time.

In simple terms, mobile computing = Mobility + Computing + Wireless Communication.
`,
      },

      {
        heading: "2. Characteristics / Features of Mobile Computing",

        notes: `
Portability – Devices are small and light enough to carry anywhere.
Connectivity – Ability to stay connected via cellular networks, Wi-Fi, Bluetooth, etc.
Interactivity – Users can communicate with networks, servers, and other devices in real time.
Individuality – Devices can be configured and personalized to suit individual user needs.
Mobility – The device and the user can move freely while computing continues.
Broad reach – Users can be reached regardless of their current location.
`,
      },

      {
        heading: "3. Components / Architecture of Mobile Computing",

        notes: `
Mobile computing systems are generally built on three core components:

1. Mobile Hardware – Physical devices such as smartphones, tablets, laptops, wearables, sensors, etc.
2. Mobile Software (Mobile OS + Applications) – The operating system and apps that run on the device (e.g., Android, iOS, mobile apps).
3. Mobile Communication Infrastructure – The wireless network through which data travels — cellular networks (GSM/CDMA/LTE/5G), Wi-Fi, satellite, Bluetooth, infrared, etc.
`,
      },

      {
        heading: "4. Generations of Mobile Communication",

        notes: `
Generation | Approx. Era | Key Feature | Speed (approx.)
1. 1G | 1980s | Analog voice calls only          | ~2 kbps
2. 2G | 1990s | Digital voice, SMS               | ~64 kbps
3. 3G | 2000s | Mobile internet video calls      | ~2 Mbps
4. 4G (LTE) | 2010s | High-speed internet, streaming | ~100 Mbps
5. 5G | 2020s | Ultra-low latency, IoT, AR/VR support | 1–10+ Gbps
`,
      },

      {
        heading: "5. Applications of Mobile Computing",

        notes: `
1. Business – Mobile banking, e-commerce, stock trading apps.
2. Education – E-learning apps, virtual classrooms.
3. Healthcare – Remote patient monitoring, telemedicine apps.
4. Navigation – GPS-based maps and tracking systems.
5. Entertainment – Streaming services, mobile gaming.
6. Communication – Messaging apps, video calling.
7. Emergency Services – Location-based alerts, vehicle tracking.
`,
      },

      {
        heading: "6. Advantages of Mobile Computing",

        notes: `
1. Increases productivity by enabling work from any location.
2. Provides real-time access to information and services.
3. Enhances communication and collaboration.
4. Supports location-based and context-aware services.
5. Enables flexibility and faster decision-making.
`,
      },

      {
        heading: "7. Limitations / Challenges of Mobile Computing",

        notes: `
1. Limited battery life of portable devices.
2. Bandwidth constraints and network variability/signal loss.
3. Security and privacy risks (data interception, device theft).
4. Limited processing power and storage compared to desktops.
5. Device heterogeneity – varying screen sizes, OS versions, hardware capability.
6. Disconnections – frequent handoffs between networks/cells.
`,
      },

      {
        heading: "8. Introduction to Mobile Application Development",

        notes: `
1. Mobile Application Development is the process of designing, creating, programming, 
and deploying software applications specifically intended to run on mobile devices such as smartphones and tablets.

2. Unlike traditional software development, it must account for limited screen size, 
touch-based input, varying hardware, intermittent connectivity, and power constraints.
`,
      },

      {
        heading: "9. Types of Mobile Applications",

        notes: `
1. Native Applications-
Native applications are mobile apps that are developed specifically for a particular operating system, such as Android or iOS. They are created using the programming languages and development tools recommended for that platform, such as Kotlin/Java for Android and Swift for iOS.

Advantages:
-High performance and speed
-Better user experience
-Full access to device hardware features such as camera, GPS, microphone, and sensors
Examples: Instagram, Google Maps

2. Web Applications-
Web applications are applications that run inside a mobile web browser. They are developed using web technologies such as HTML, CSS, and JavaScript and do not need to be installed from an app store.

Advantages:
-No installation required
-Accessible from any device with a browser
-Easy to update and maintain
Examples: Mobile versions of websites such as online banking portals or e-commerce websites

3. Hybrid Applications-
Hybrid applications combine features of both web and native applications. They are developed using web technologies but are packaged inside a native application container, allowing them to be installed on mobile devices and access certain hardware features.

Advantages:
-Single codebase for multiple platforms
-Lower development cost
-Faster development process
Examples: Applications developed using Ionic or Apache Cordova

4. Cross-Platform Applications-
Cross-platform applications are built using a single codebase that can run on multiple operating systems such as Android and iOS. Special frameworks are used to create these applications.

Advantages:
-Code can be reused across platforms
-Reduced development time and cost
-Consistent user experience across devices
Examples: Applications developed using Flutter and React Native

5. Progressive Web Applications (PWA)-
Progressive Web Applications (PWAs) are web applications that provide an experience similar to native mobile apps. They can work offline, send push notifications, and can be added to the device's home screen without downloading them from an app store.

Advantages:
-No app store installation required
-Offline functionality
-Faster loading and improved performance
Examples: Twitter Lite, Starbucks PWA
`,
      },
    ],
  },
  {
  id: 2,

  title: "2. Evolution of Mobile Devices and Mobile Operating Systems",

  short:
    "History and evolution of mobile devices and operating systems.",

  subtopics: [
    {
  heading: "Introduction",

  notes: `

Mobile devices have evolved from bulky analog phones used only for voice communication into powerful handheld computers capable of internet access, multimedia processing, artificial intelligence, and cloud connectivity.

This evolution occurred alongside the development of mobile operating systems, which transformed basic communication devices into programmable smart platforms capable of running thousands of applications.

Modern smartphones have become an essential part of everyday life, supporting communication, education, business, entertainment, healthcare, and mobile commerce.
`,
},

{
  heading: "1. Evolution of Mobile Devices",

  notes: `

The evolution of mobile devices can be divided into multiple phases based on technological advancements and user requirements.

Major stages include:

• First Mobile Phones
• Feature Phones
• Early Smartphones
• Modern Smartphones
• Advanced Smartphones
• Current Generation Devices

Each generation introduced new capabilities such as messaging, internet connectivity, touch interfaces, high-speed networking, and artificial intelligence.
`,
},

{
  heading: "2. Phase-wise Evolution of Mobile Devices",

  notes: `

First Mobile Phones (1970s–1980s)
• Large and heavy analog devices
• Operated on first-generation (1G) networks
• Supported only voice communication
Example: Motorola DynaTAC 8000X (1983)

Feature Phones (1990s–Early 2000s)
• Smaller and more affordable devices
• Operated on digital 2G networks
• Supported SMS messaging and simple applications
Examples: Nokia 3310 | Motorola RAZR

Early Smartphones (Mid-2000s)
• Combined phone and PDA (personal digital assistant) functionality
• Supported email and limited applications
• Used physical keyboards or stylus input
Examples: BlackBerry Devices | Palm Treo

Modern Smartphones (2007 Onwards)
• Full touchscreen interfaces
• Application ecosystem through app stores
• High-speed internet connectivity
Examples: Apple iPhone (2007) | HTC Dream (2008)

Advanced Smartphones (2010s)
• HD displays
• Multi-core processors
• Multiple cameras
• 4G LTE support
Examples: iPhone 6 | Samsung Galaxy S Series

Current Generation Smartphones (2020s)
• 5G connectivity
• Foldable displays
• AI-powered features
• Wearable integration
Examples: Samsung Galaxy Fold | Huawei Mate X
`,
},

{
  heading: "3. Key Milestone Devices",

  notes: `
Several devices played an important role in shaping modern mobile technology.

1983 – Motorola DynaTAC 8000X
• First commercially available handheld mobile phone

1992 – IBM Simon
• Considered the first smartphone
• Combined telephone and PDA functions

1996 – Nokia 9000 Communicator
• Supported email and web browsing

1999 – BlackBerry 850
• Popularized mobile email communication

2007 – Apple iPhone
• Introduced multi-touch technology
• Revolutionized smartphone design

2008 – HTC Dream (T-Mobile G1)
• First commercial Android smartphone

2010 – Apple iPad
• Popularized tablet computing

2019 Onwards – Foldable Phones
• Introduced flexible display technology
`,
},

{
  heading: "4. Evolution of Mobile Operating Systems",

  notes: `

As mobile hardware evolved, operating systems also became more powerful and user-friendly.

Mobile operating systems provide:
• User Interface
• Application Support
• Hardware Management
• Security Services
• Network Connectivity
The development of mobile operating systems transformed mobile devices into fully functional computing platforms.
`,
},

{
  heading: "5. Early Mobile Operating Systems",

  notes: `

Palm OS (1996)-
• Designed for Personal Digital Assistants (PDAs)
• Touch and stylus-based interface
• Lightweight operating system

Symbian OS (1997)-
• Widely adopted by Nokia devices
• Dominated the smartphone market before Android and iOS

BlackBerry OS (1999)-
• Focused on enterprise communication
• Secure email and messaging services

Windows Mobile / Windows Phone-
• Developed by Microsoft
• Supported productivity applications
• Later redesigned with a tile-based user interface
• Eventually discontinued
`,
},

{
  heading: "6. Modern Mobile Operating Systems",

  notes: `

iOS (2007)
• Developed by Apple Inc.
• Used exclusively in iPhone and iPad devices
• Closed-source operating system
• Known for security, performance, and hardware integration

Android (2008)
• Developed by Google
• Based on the Linux Kernel
• Open-source platform
• Supports devices from multiple manufacturers

Examples:
Samsung
Xiaomi
OnePlus
Realme

Android currently holds the largest share of the global smartphone market.
`,
},

{
  heading: "7. Other Mobile Operating Systems",

  notes: `

HarmonyOS
• Developed by Huawei
• Introduced in 2019
• Designed for smartphones and IoT devices

KaiOS
• Lightweight operating system
• Designed for feature phones
• Supports essential smart features

Examples:
WhatsApp
Google Assistant
YouTube
`,
},

{
  heading: "8. General Mobile Operating System Architecture",

  notes: `

A mobile operating system generally follows a layered architecture.

Applications Layer
• User applications and graphical interface

Application Framework
• APIs and services for developers

Libraries and Runtime
• Graphics engines
• Databases
• Runtime environments

Operating System Kernel
• Process management
• Memory management
• Device management

Hardware Layer
• CPU
• Sensors
• Camera
• Radio modules
`,
},

{
  heading: "9. Functions of Mobile OS Layers",

  notes: `

Kernel
• Controls hardware resources
• Manages memory and processes

Libraries and Runtime
• Provide reusable software functions
• Support graphics, databases, and multimedia

Application Framework
• Offers APIs for developers
• Simplifies application development

Applications
• End-user programs installed on the device
`,
},

{
  heading: "10. Android vs iOS Comparison",

  notes: `

Developer
Android:- Google
iOS:- Apple

Source Model
Android:- Open Source (AOSP)
iOS:- Closed Source

Hardware Support
Android:- Multiple Manufacturers
iOS:- Apple Devices Only

Customization
Android:- High
iOS:- Limited

Application Store
Android:- Google Play Store
iOS:- Apple App Store

Programming Languages
Android:- Kotlin, Java
iOS:- Swift, Objective-C

Market Reach
Android:- Larger Global Market Share
iOS:- Strong Premium Segment Presence
`,
},

{
  heading: "11. Future Trends in Mobile Devices and Operating Systems",

  notes: `

The future of mobile computing is driven by emerging technologies and user demands.

Major trends include:
• Foldable and rollable displays
• 5G and future 6G connectivity
• Artificial Intelligence integration
• Enhanced privacy and security mechanisms
• Edge computing support
• Integration with wearable devices
• Internet of Things (IoT) connectivity
• Cloud-based mobile services
These technologies will continue to shape the next generation of mobile devices and operating systems.
`,
},

{
  heading: "12. Quick Revision Points",

  notes: `

• Mobile devices evolved from analog phones to AI-powered smartphones.
• Feature phones introduced SMS and basic applications.
• The iPhone (2007) and Android (2008) initiated the modern smartphone era.
• Early operating systems included Palm OS, Symbian OS, BlackBerry OS, and Windows Mobile.
• Modern operating systems are Android and iOS.

• Mobile OS architecture consists of:
Hardware
Kernel
Libraries and Runtime
Application Framework
Applications

• Future trends include foldables, AI integration, 5G/6G connectivity, and IoT ecosystems.
`,
},

  ],
},
{
  id: 3,

  title: "3. Types of Mobile Applications (Native, Hybrid, Web Apps)",

  short:
    "Introduction to various categories of mobile applications.",

  subtopics: [

    {
      heading: "01 — Native Applications",

      notes: `
A Native App is built specifically for one mobile OS (Operating System) — the base software that manages a device's hardware. Examples of an OS: Android (by Google) and iOS — iPhone Operating System (by Apple).
How they're built:

Android apps → written in Java or Kotlin, developed using Android Studio (an IDE — Integrated Development Environment, i.e. the software tool where programmers write and test code)
iOS apps → written in Swift or Objective-C, developed using Xcode (Apple's IDE)
Distributed through the Google Play Store (Android) or Apple App Store (iOS)

Key concept — SDK: Developers use an SDK (Software Development Kit) — a package of tools and pre-written code provided by the platform (Android/Apple) to help build apps for it.
Key concept — API: Native apps communicate with device hardware (camera, GPS — Global Positioning System, microphone, contacts) through APIs (Application Programming Interfaces) — sets of rules that allow one software to talk to another.
Advantages: Fastest performance, best UI (User Interface) feel, full hardware access, works offline.
Disadvantages: Requires two separate codebases (one for Android, one for iOS), higher development cost and time.
Real examples: WhatsApp, Google Maps, Instagram — all have separate native builds for each platform.
`,
    },

    {
      heading: "02 — Hybrid Applications",

      notes: `
A Hybrid App is a combination of a native app and a web app. The core is built with web technologies — HTML (HyperText Markup Language), CSS (Cascading Style Sheets), and JS (JavaScript) — but it is wrapped inside a native shell, allowing it to be installed like a native app.
The WebView concept: At the heart of a hybrid app is a WebView — an embedded mini-browser inside the native shell. Think of it as a picture frame (native shell) holding a web page (picture) inside it. The web code runs inside this WebView, while the shell gives access to device hardware.
Popular Frameworks (pre-built tools that make development faster):

Apache Cordova, Ionic, React Native, Flutter, Xamarin

Cross-Platform: One codebase works on both Android and iOS — this is called being cross-platform.
Advantages: Single codebase saves cost, partial device hardware access via APIs, faster time to market.
Disadvantages: Slightly slower than native, the UX (User Experience) may not feel as smooth as a pure native app.
Real examples: Early Uber, Microsoft Teams, some features of Instagram (React Native).
`,
    },

    {
      heading: "03 — Web Applications (PWA)",

      notes: `
A Web App is essentially a website designed to look and behave like a mobile app. It runs inside a web browser (Chrome, Safari, Firefox) and requires no installation.
PWA — Progressive Web App: The modern evolution of web apps. A PWA uses advanced browser features — including a Service Worker (a background JavaScript script) — to:

Cache data locally so parts work offline
Send push notifications
Be "installed" (pinned to the home screen) without going through an app store

Users access web apps through a URL (Uniform Resource Locator) — the full web address, like https://www.example.com.
APK: Worth noting here — native Android apps are distributed as an APK (Android Package Kit) file, the Android equivalent of a Windows .exe installer. Web apps require no APK at all.
Advantages: No app store approval needed, works on any device with a browser, instant updates (just update the server).
Disadvantages: Limited hardware access, generally slower performance, mostly needs internet.
Real examples: Twitter Lite (PWA), Starbucks PWA, Flipkart Lite.
`,
    },

  ],
},
{
  id: 4,

  title: "4. Introduction to Object-Oriented Programming (OOP)",

  short:
    "Comparison and characteristics of mobile application types.",

  subtopics: [

    {
      heading: "1. Why Do We Need OOP?",

      notes: `
Imagine you're writing a program to manage a school. You need to keep track of students, teachers, and classrooms — their names, ages, grades, subjects, etc. — and also perform actions like "enroll student," "assign grade," "calculate average marks."

The old way (Procedural Programming):
You'd write a bunch of separate variables and functions:

student1_name = "Riya"
student1_age = 16
student1_marks = [85, 90, 78]

def calculate_average(marks):
    return sum(marks) / len(marks)

This works fine for one student. But what about 500 students? You'd end up with messy, repeated code, and no clean way to bundle a student's data (name, age, marks) with their behavior (calculate average) together.

The OOP way:
We bundle data + behavior into a single unit called an Object, modeled on a blueprint called a Class.

class Student:
    def __init__(self, name, age, marks):
        self.name = name
        self.age = age
        self.marks = marks

    def calculate_average(self):
        return sum(self.marks) / len(self.marks)

riya = Student("Riya", 16, [85, 90, 78])
print(riya.calculate_average())

Now every student is a self-contained, reusable "thing." That's the heart of OOP — modeling real-world entities as objects.
`,
    },

    {
      heading: "2. The Two Foundational Words: Class & Object",

      notes: `
Class-
A Class is a blueprint, template, or prototype that defines the properties (data) and behaviors (functions) that 
objects of that class will have.

In simple words, a class is a design or plan from which objects are created.

Key Points
A class does not occupy memory until an object is created.
It defines the structure and behavior of objects.
It contains variables (attributes) and methods (functions).
One class can create many objects.

Object-
An Object is a real-world instance of a class.

It is created using the blueprint provided by the class and occupies memory.

Key Points
Objects are actual entities.
Memory is allocated when an object is created.
Each object has its own values.
Multiple objects can be created from the same class.
`,
    },

  ],
},
{
  id: 5,

  title: "5. OOP Concepts: Classes, Objects, Encapsulation, Inheritance, Polymorphism",

  short:
    "Fundamentals of object-oriented programming.",

  subtopics: [

    {
      heading: "1 — Classes",

      notes: `
A **class** is a blueprint. It defines what an object will look like and what it will be able to do — but it is not the object itself. Think of a class the way you'd think of an architectural drawing for a house. The drawing describes the number of rooms, the layout, the dimensions — but the drawing is not a house. You can build a hundred houses from one drawing, and each house is its own independent structure.

In code, a class defines:

- **Attributes** (also called fields or properties) — the data the object will hold, like name, age, or speed
- **Methods** — the functions the object can perform, like drive(), stop(), or calculateSalary()

A class costs nothing by itself. It sits in memory as a definition. No data is stored in a class — data lives in the objects created from it.
`,
    },

    {
      heading: "2 — Objects",

      notes: `
An **object** is a concrete instance of a class. When you take the class blueprint and actually create something from it in memory, that thing is an object. This process is called **instantiation**.

If Car is a class, then myCar, yourCar, and taxiCar are three separate objects — each with their own color, speed, and fuel level. Changing myCar's speed does not affect yourCar's speed, even though both were created from the exact same class.

Every object has three fundamental characteristics:

- **State** — the current values of its attributes (e.g., speed = 60, color = "red")
- **Behavior** — what it can do via its methods (e.g., accelerate(), brake())
- **Identity** — each object is a unique entity in memory, distinct from all others
`,
    },

    {
      heading: "3 — Encapsulation",

      notes: `
Encapsulation is the principle of **bundling data and the methods that operate on that data together inside a class, and hiding the internal details from the outside world.**

The word "encapsulate" literally means to enclose in a capsule. That's exactly what you're doing — you wrap the data inside the object and control how the outside world can interact with it.

Think about your smartphone. You press a button and the volume changes. You have no idea what happens electrically inside — and you don't need to. The internals are hidden. You're given a clean interface (the button) to interact with. That's encapsulation in everyday life.

In code, encapsulation is enforced using **access modifiers**:

- private — only accessible within the same class. No one outside can touch it directly.
- protected — accessible within the class and its subclasses.
- public — accessible from anywhere.

The standard pattern is to make attributes private and provide controlled access through getters and setters — methods that read or write the value with whatever validation you choose to apply.

For example, a BankAccount class would keep balance private. You would never let external code set balance = -50000 directly. Instead, you'd provide a deposit(amount) method that validates the amount before adding it, and a withdraw(amount) method that checks sufficient funds first. The data is protected; the logic lives in one place.

The two key benefits this gives you are **data integrity** (nobody can corrupt your object's state from outside) and **maintainability** (you can change the internal implementation without breaking any code that uses your class).
`,
    },

    {
      heading: "4 — Inheritance",

      notes: `
Inheritance is the mechanism by which **one class can acquire the properties and methods of another class.** The class being inherited from is called the **parent class** (or superclass or base class). The class doing the inheriting is called the **child class** (or subclass or derived class).

The relationship is always an **"is-a" relationship**. A Dog is an Animal. A SavingsAccount is a BankAccount. A Car is a Vehicle. If you can say that sentence naturally, inheritance is probably the right tool.

Why does this matter? Without inheritance, if you had a Dog class and a Cat class, you'd write the eat(), sleep(), and breathe() methods twice — once in each class. That's code duplication. With inheritance, you write those methods once in an Animal class, and both Dog and Cat inherit them automatically.

The child class gets everything from the parent, and then adds its own unique stuff on top:

- Dog might add fetch() and bark()
- Cat might add purr() and climbTree()

The parent class's code is reused entirely — not copied, not pasted, but genuinely shared. This makes your codebase dramatically shorter, easier to fix, and easier to extend.

There is also **multi-level inheritance**, where class C inherits from class B, which itself inherits from class A. The chain can go multiple levels deep. And in languages like Python and C++, there is **multiple inheritance** — a class inheriting from more than one parent — though Java restricts this to a single parent class (but allows multiple interfaces).

A crucial rule: a child class can **override** a parent's method — meaning it can redefine what that method does. The parent's makeSound() might do nothing, but Dog's overridden makeSound() prints "Woof" and Cat's prints "Meow."
`,
    },

    {
      heading: "5 — Polymorphism",

      notes: `
Polymorphism comes from Greek: *poly* (many) + *morphe* (forms). It means **one thing can take many forms.** In OOP, it means a single method name can behave differently depending on the object it is called on.

This is where OOP becomes truly powerful. Imagine you have an array of Animal objects — some are Dog, some are Cat, some are Bird. You loop through the array and call makeSound() on each one. The dog barks, the cat meows, the bird chirps. You called the same method name on every object, but each responded in its own way. That's polymorphism.

There are two types to understand clearly.

#### Compile-time Polymorphism — Method Overloading

This happens when a class has **multiple methods with the same name but different parameters.** The compiler decides at compile time which version to call, based on what arguments you pass.

For example, a Calculator class might have:

- add(int a, int b) — adds two integers
- add(double a, double b) — adds two decimals
- add(int a, int b, int c) — adds three integers

All three are named add. The compiler looks at what you pass in and routes to the right one. This is called **overloading**, and it is resolved statically — before the program even runs.

#### Runtime Polymorphism — Method Overriding

This is the more interesting and powerful type. It happens when a **child class provides its own implementation of a method that already exists in the parent class.** The decision of which version to run happens at runtime — while the program is executing.

The classic setup:

- Animal has a method makeSound() that does nothing (or is declared abstract)
- Dog overrides it to print "Woof"
- Cat overrides it to print "Meow"

Now you write code that holds an Animal reference but assigns a Dog object to it. When you call makeSound(), it calls the Dog's version — not the Animal's. The correct method is resolved at runtime based on the actual object type, not the reference type. This is called **dynamic dispatch**.

This is extremely useful because it allows you to write code that works generically against a parent type, while still getting the specific behavior of each child. You can add a Parrot class tomorrow, override makeSound() to say "Polly wants a cracker," and all your existing code still works — no changes needed anywhere else. This property is called the **Open/Closed Principle**: your system is open for extension but closed for modification.
`,
    },

  ],
},
{
  id: 6,
  title: "6. Introduction to Software Engineering and SDLC",
  short: "Software engineering principles and SDLC overview.",
},
{
  id: 7,
  title: "7. Software Design",
  short: "Software design principles, processes, structure charts, modularity, and estimation models.",
  subtopics: softwareDesignSubtopics,
},
{
  id: 8,
  title: "8. Introduction to Android: History, Features, Versions, Android Ecosystem",
  short: "Overview of the Android operating system.",
  subtopics: androidIntroductionSubtopics,
},
{
  id: 9,
  title: "9. Android Architecture Overview and Android Application Components",
  short: "Android architecture layers and application components.",
},
{
  id: 10,
  title: "10. Android Development Environment Overview (Android Studio, SDK, Emulator) + Unit 1 Revision",
  short: "Android Studio, SDK, Emulator and Unit 1 revision.",
},
];

export const unit1Cards = allUnit1Cards;
