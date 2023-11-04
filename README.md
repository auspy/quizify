
# Quizify - Proctor, Monitor, and Evaluate with Ease

## Overview

Quizify is an advanced, browser-based exam proctoring application designed to conduct online exams securely, eliminating cheating practices. This application features robust anti-cheating measures, object detection, and full-screen exam mode to ensure integrity and authenticity during examinations.


## Landing Page
- Seamless landing page with Login/SignUp Button.
  
![quizifyLogo](https://github.com/priyankashah3107/quizify/assets/105877016/f2612b46-94ea-41e2-ae68-902d98a19691)

- Welcome page


![welcomePage](https://github.com/priyankashah3107/quizify/assets/105877016/0ea01b39-28d3-450b-a72a-1b9304c777f0)

##  Student DashBoard




https://github.com/priyankashah3107/quizify/assets/105877016/b85ebd21-8c88-4325-9735-f4ca8a9ea2c5


### Features
- **Anti-Cheating Measures**: Prevents secondary monitor usage, enables microphone and camera access for recording, and restricts additional tab openings during exams.
- **Object Detection**: Identifies unauthorized objects (e.g., mobile devices, extra screens) to ensure user focus.
- **Full-Screen Exam Mode**: Ensures exams run exclusively in full-screen mode, preventing tab-switching or other application access.
- **Webcam Surveillance**: Monitors users via webcam.
- **Random Room Surveys**: Conducts random room surveys to ensure compliance.
- **Tab Switch Prevention**: Prevents users from switching tabs during the exam.
- **No Multiple Monitors**: Restricts the use of multiple monitors during exams.

### Technologies Used
- **Backend**: Prisma, Next.js, PostgreSQL, Supabase
- **Frontend**: React
- **Object Detection**: TensorFlow.js, COCO-SSD
- **Database**: PostgreSQL

### User Scenarios

#### What Happens If someone:
- **Do not enable their camera**: Users must enable the camera for surveillance.
- **Tries to switch tabs during the test**: Tab-switching is prevented during the exam.
- **Face not Visible**: Face visibility is mandatory for proctoring.
- **Uses Phone**: Any phone usage is detected and flagged.
- **Tries to cheat with someone in the room**: Collaboration or attempts to cheat with someone in the room will be flagged.

## Development Timeline

### Step 1: Design Phase
- **Design Idea and Prototype**: Implemented the initial design idea and created a basic application.
- **Basic Technology Exploration**: Explored technologies including Node.js, Express.js, and related tools.
- **Server Setup**: Established the server using Node.js.

### Step 2: Front-End Development
- **Client-Side Design**: Developed client-side pages using React and Tailwind CSS, initiating Requirement Specifications.
- **Logic Implementation**: Simulated API data and implemented client-side logic using JavaScript.

### Step 3: Database and API Development
- **Database Creation**: Designed schemas and implemented the database using PostgreSQL, integrated with Node.js.
- **API Development**: Constructed necessary APIs using Next.js backend for the web application.

### Step 4: Refinement and Testing
- **Client-Side Logic Enhancement**: Updated logic to utilize actual API data.
- **Testing and Bug Fixes**: Tested functionalities for various scenarios and resolve identified issues.


### Deployment
The web app has been deployed to "Vercel." Here is the link to access the application: [Quizify App](https://thequizify.vercel.app/)

## Installation/Environment Setup

1. **Clone App**:
   - Create a new folder and open the terminal.
   - Run `git clone https://github.com/auspy/quizify.git` in the terminal.

2. **Set Environment Variables**:
   - Uncomment `dotenv.config({path : './config.env'});` in `app.js`.
   - Create a file `config.env` with the necessary Environment Variables.

3. **Install Node Packages**:
   - Run `npm install` in the terminal to download all required node modules.

4. **Run Application**:
   - Execute `npm run dev` in the terminal.
   - The app will be running at [http://localhost:3000/](http://localhost:3000/).












<!-- 
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
