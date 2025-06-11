// 1. What is your roles & responsbility?

// In my current project, I start by participating in the estimation phase — breaking down user stories and giving accurate time estimates. Once that’s done, 
// I move on to the design part, where I plan how the feature will work, both from the UI and technical side. I then handle the development, writing clean React Native code. 
// After that, I write unit testing cases with Jest to ensure everything works properly. 
// Once it's tested, I deploy the app using CI/CD pipelines like CircleCI. 
// If any issues come up in production, I take care of bug fixing as well.


//2. explain the project architacture in react native 

// "In our React Native project, we follow a feature-based folder structure to improve scalability and maintainability. 
// Each feature has its own folder with components, Redux logic, services, and tests inside. 
// We follow the SOLID principles—like single responsibility by separating UI, logic, and API layers. For example, 
// our API logic is managed in dedicated service files, which keeps the code clean. 
// We also follow the DRY principle by creating reusable components and utility functions. 
// This architecture helps multiple developers work efficiently on isolated features without breaking others."

// /src
// ├── /features
// │   ├── /auth
// │   │   ├── components/
// │   │   ├── screens/
// │   │   ├── services/
// │   │   ├── redux/
// │   │   └── tests/
// │   ├── /chat
// │   ├── /profile
// │   └── /settings
// │
// ├── /components         # Reusable shared components (e.g., Button, Header)
// ├── /navigation         # App navigation (React Navigation setup)
// ├── /services           # Shared API services (e.g., Axios setup, Firebase)
// ├── /redux              # Root store configuration
// ├── /utils              # Helper functions, constants, formatters
// ├── /hooks              # Custom reusable hooks
// ├── /assets             # Images, fonts, etc.
// ├── /theme              # Colors, fonts, sizes (design system)
// └── App.tsx             # Entry point




// 3 .What is Agile Methodology?

// We use Agile in our project, which means we work in 2-week sprints. Every sprint starts with planning tasks. 
// Every day we have a short meeting to share progress. I pick tasks, develop features, write tests, and fix bugs. 
// At the end of each sprint, we show the completed work, get feedback, and improve in the next sprint.
//  This helps us deliver quickly and adapt to changes easily.



// Here are simple, straightforward answers to your project and leadership-based questions:

// 1. "Can you walk me through a recent project you led end-to-end?"
// Answer:
// Sure! I recently led a project to build a [mention a simple feature/app, e.g., "task management tool"]. Here’s how it went:

// Understanding Requirements: I talked to stakeholders (users, managers) to know what they needed.

// Planning: Broke the work into small tasks, assigned them to the team, and set deadlines.

// Development: Coded my part, reviewed teammates' code, and fixed bugs.

// Testing: Worked with testers to ensure everything worked well.

// Launch: Deployed the feature and checked for issues after release.

// Feedback: Asked users how it worked and made small improvements.

// Key Point: I made sure everyone was aligned, and the project was delivered on time.

// 2. "How do you ensure high code quality across the team?"
// Answer:
// I follow these simple steps:

// Code Reviews: Every change is checked by another developer before merging.

// Coding Standards: The team agrees on rules (like naming, formatting) and follows them.

// Automated Tests: We write tests to catch bugs early.

// Tools: Use linters (tools that check code style) and CI/CD (automated testing/deployment).

// Learning: Share best practices in team meetings.

// Key Point: Consistency + reviews + automation = good code.

// 3. "Have you mentored junior developers? How did you handle it?"
// Answer:
// Yes! Here’s how I helped:

// Understand Their Level: First, I asked what they knew and where they needed help.

// Pair Programming: Worked together on code to teach best practices.

// Small Tasks First: Gave them easy tasks, then gradually harder ones.

// Feedback: Explained mistakes kindly and showed better ways.

// Encouragement: Let them ask questions without fear.

// Key Point: Patience + clear guidance = growth.

// 4. "How do you estimate stories and ensure on-time delivery?"
// Answer:
// Estimation:

// Break Down Tasks: Split big tasks into smaller, clearer steps.

// Discuss with Team: Ask developers how long they think it’ll take.

// Add Buffer Time: Extra time for unexpected issues.

// On-Time Delivery:

// Prioritize: Focus on the most important tasks first.

// Daily Check-ins: Quick meetings to track progress and blockers.

// Adjust if Needed: If behind, simplify features or add help.

// Key Point: Realistic estimates + constant tracking = fewer delays.

// Summary:
// Projects: Plan → Build → Test → Launch → Improve.

// Code Quality: Reviews, standards, and automation.

// Mentoring: Guide step by step with patience.

// Estimates: Break tasks, team input, and track progress.

// These answers keep it simple and relatable. Let me know if you'd like any tweaks!


// Q21.At last moment of project delevery the requirements is changd then how would you manage ? ?

// "If the requirement changes at the last moment,
//  I first talk to the client to understand it clearly. 
//  Then I check how it affects the current work, update the plan, and focus on the most important changes.
//  I work closely with my team and testers to make sure we deliver the updated project on time or with minimal delay

// Q2.if somebody resugned the team and there is extra workload then what will you do ?

// If someone resigns and there's extra workload, I first help by taking ownership of high-priority tasks. 
// I also support team members and suggest dividing the work based on everyone’s strengths. 
// If needed, I communicate with the manager about timelines or request short-term help to ensure smooth delivery without affecting quality."

//Q4. You are asked to learn new technology for new project what will yopu do ? 

// If I’m asked to learn a new technology for a project, 
// I will start by understanding the basics through official docs or tutorials.
//  I’ll also try hands-on practice by building small examples.
//   I’ll manage my time to learn quickly and ask teammates if I need help. 
// I’m always open to learning new things to grow and deliver better


// Suppose you are introduce in a project with tight deadline clinent is not happy then what will you do ?

// If I join a project with a tight deadline and the client is not happy, 
// I will first understand the client’s concerns and project status. 
// Then I will plan the tasks based on priority, work closely with the team, and focus on quick wins to show progress. 
// I will also keep the client updated regularly to rebuild trust and make sure we meet the deadline as best as possible.

// Q. Tell me about a time you improved productivity in your team?
// Answer:
// In a recent project—a game scheduling app—we faced delays in deploying builds to the App Store and Play Store, which affected the release cycle.
// To solve this, I implemented a CI/CD pipeline using CircleCI and Fastlane. I wrote custom scripts, set up environment variables, and connected our GitHub repo to CircleCI. 
// Whenever we pushed code to a specific branch, the app was automatically built and deployed.
// This automation saved a lot of manual effort and significantly reduced deployment time. As a result, we improved team productivity and release efficiency by at least 30%.
 
// same answer
// Answer:
// In a recent game scheduling app project, deployment to the App Store and Play Store was time-consuming. I implemented a CI/CD pipeline using CircleCI and Fastlane, automating the build and deployment process. This reduced manual effort and saved significant time, 
// improving team productivity by 30%.

// Q. Describe a situation where you had to solve a complex problem

// Answer:
// In the Teamvate app, the client requested support for React Native Web using the same codebase that was already built for Android and iOS.
// Integrating React Native Web was challenging due to limited documentation, unsupported dependencies, and styling issues across platforms.
// To overcome these, I created custom components, handled styles using Dimensions, and replaced unsupported packages with web-compatible ones.
// By applying these solutions, we successfully launched the web version before the deadline, and the client appreciated my effort and contribution.


//updated answer
// Answer:
// In the Teamvate app, the client wanted React Native Web support using the same mobile codebase. I faced issues like limited documentation, unsupported dependencies, and styling conflicts. I resolved them by creating custom components and using Dimensions for styling. 
// We delivered the web version before the deadline, and the client appreciated my work.