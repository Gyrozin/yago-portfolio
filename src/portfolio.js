/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yago Biazotto",
  title: "Hi, I'm Yago!",
  subTitle: emoji(
    "A passionate IT professional focused on Cloud, DevOps and Backend development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1tQOmr5lhlq0e-o9RNMjukkbjWie1r2X-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gyrozin",
  linkedin: "https://www.linkedin.com/in/yagobiazotto/",
  gmail: "yagobiazotto.silvaa@gmail.com",
  gitlab: "https://gitlab.com/Yagosh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Cloud | DevOps | Backend ",
  skills: [
    emoji(
      "⚡ Build scalable backend APIs"
    ),
    emoji("⚡ Design infrastructure on AWS"),
    emoji(
      "⚡ Automate CI/CD pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade Paulista",
      logo: require("./assets/images/unip.png"),
      subHeader: "Bachelor in Information Technology",
      duration: "2022 - 2024",
      desc: "Focused on backend development, cloud computing and IT operations.",
      descBullets: [
        "Studied software development and system architecture",
        "Worked with databases, APIs and backend technologies",
        "Developed projects using Java and cloud services"
      ]
    },
    {
      schoolName: "Amazon Web Services (AWS)",
      logo: require("./assets/images/amazon.png"),
      subHeader: "Cloud Computing & AWS Architecture",
      duration: "2025 - Present",
      desc: "Focused on designing scalable and reliable cloud architectures using AWS services and cloud-native best practices.",
      descBullets: [
        "Studying core AWS services such as EC2, S3, RDS, Lambda and CloudFront",
        "Learning cloud architecture patterns and high availability design",
        "Working with Infrastructure as Code using Terraform and CloudFormation",
        "Implementing monitoring and observability using CloudWatch and other tools"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud / AWS", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "45%"
    },
    {
      Stack: "Infrastructure & DevOps",
      progressPercentage: "35%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior IT Analyst",
      company: "Porto S/A",
      companylogo: require("./assets/images/porto.png"),
      date: "December 2022 – Present",
      desc: "Worked in IT operations supporting identity and access management processes in enterprise environments.",
      descBullets: [
        "Managed logical access provisioning and deprovisioning using IAM/IDM systems",
        "Handled onboarding and offboarding processes ensuring secure access control",
        "Worked with LDAP directories and access governance tools",
        "Analyzed system logs and operational incidents to maintain service availability",
        "Collaborated with infrastructure and development teams to resolve access and system issues"
      ]
    },
    {
      role: "IT Trainee – Technology Program",
      company: "Porto S/A",
      companylogo: require("./assets/images/porto.png"),
      date: "July 2022 – December 2022",
      desc: "Participated in Porto Seguro's IT training program focused on technology foundations, enterprise systems and IT operations.",
      descBullets: [
        "Learned core concepts of enterprise IT infrastructure and system architecture",
        "Studied identity and access management processes used in corporate environments",
        "Worked with internal systems and tools used in IT operations",
        "Collaborated with technical teams to understand operational workflows and service management",
        "Developed foundational knowledge in backend development, databases and system integration"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and technical milestones !",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner (In Progress)",
      subtitle:
        "Studying AWS cloud fundamentals including EC2, S3, networking and cloud architecture.",
      image: require("./assets/images/amazon.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "AWS Certification",
          url: "https://aws.amazon.com/certification/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out for opportunities or collaboration.",
  number: "+55-11952910130",
  email_address: "yagobiazotto.silvaa@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
