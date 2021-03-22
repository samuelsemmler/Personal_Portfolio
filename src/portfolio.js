﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Samuel Semmler",
    title: "Hi all, I'm Samuel",
    subTitle: emoji(
        "A passionate Software Developer 💻 having an experience of building Artificial Intelligence and Robotics Algorithms with C / C++ / Python and some other cool libraries and frameworks."
    ),
    resumeLink:
        "https://1drv.ms/u/s!AhF035YTQ-Jqhpwq-WMGbWd61fctnw?e=0Saamp",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/samuelsemmler",
    linkedin: "https://www.linkedin.com/in/samuel-augusto-semmler-developer",
    // gmail: "samuelsemmler16@gmail.com",
    outlook: "samuelsemmler@hotmail.com",
    stackoverflow: "https://stackoverflow.com/users/13844302/samuel",
    twitter: "https://twitter.com/SamuelSemmler",
    // Instagram and Twitter are also supported in the links!
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "SOFTWARE DEVELOPER WHO LOVES TO BUILD AND PROGRAM ROBOTS WITH ARTIFICIAL INTELLIGENCE",
    skills: [
        emoji("⚡ Machine learning applied to robotics functions, such as computer vision, autonomous driving and other tasks"),
        emoji("⚡ Machine learning framewoks, like Tensorflow, Keras, PyTorch and others"),
        emoji("⚡ Robotics framewoks, like ROS"),
        emoji("⚡ IoT solutions")
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "C",
            fontAwesomeClassname: "fas fa-code"
        },
        {
            skillName: "C++",
            fontAwesomeClassname: "fas fa-code"
        },
        {
            skillName: "Python",
            fontAwesomeClassname: "fas fa-code"
        },
        {
            skillName: "Arduino",
            fontAwesomeClassname: "fas fa-microchip"
        },
        {
            skillName: "ESP8266",
            fontAwesomeClassname: "fas fa-microchip"
        },
        {
            skillName: "ESP32",
            fontAwesomeClassname: "fas fa-microchip"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "Robot",
            fontAwesomeClassname: "fas fa-robot"
        },
        {
            skillName: "IoT",
            fontAwesomeClassname: "fas fa-laptop-code"
        },
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: false, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Harvard University",
            logo: require("./assets/images/harvardLogo.png"),
            subHeader: "Master of Science in Computer Science",
            duration: "September 2017 - April 2019",
            desc: "Participated in the research of XXX and published 3 papers.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            schoolName: "Stanford University",
            logo: require("./assets/images/stanfordLogo.png"),
            subHeader: "Bachelor of Science in Computer Science",
            duration: "September 2013 - April 2017",
            desc:
                "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Artificial Intelligence Developer", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Robotics Developer",
            progressPercentage: "70%"
        },
        {
            Stack: "Maker",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: false, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Software Engineer",
            company: "Facebook",
            companylogo: require("./assets/images/facebookLogo.png"),
            date: "June 2018 – Present",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            role: "Front-End Developer",
            company: "Quora",
            companylogo: require("./assets/images/quoraLogo.png"),
            date: "May 2017 – May 2018",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Software Engineer Intern",
            company: "Airbnb",
            companylogo: require("./assets/images/airbnbLogo.png"),
            date: "Jan 2015 – Sep 2015",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            image: require("./assets/images/LogoBunker.webp"),
            projectName: "Bunker Comercial Ltda",
            projectDesc: "Completely automated refrigerator that reads and controls the temperature, sends the value to a cloud platform and is completely configurable via an intelligent display.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.lojabunker.com.br/"
                }
                //  you can add extra buttons here.
            ]
        },
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Google Code-In Finalist",
            subtitle:
                "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            footerLink: [
                {
                    name: "Certification",
                    url:
                        "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url:
                        "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url:
                        "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle:
                "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url:
                        "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },


        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [
        {
            url:
                "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
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

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "",
    email_address: "samuelsemmler@hotmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
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
    twitterDetails
};
