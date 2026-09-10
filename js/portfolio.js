// All portfolio content lives here.
// Replace placeholder values with your real information.

const portfolio = {
      personal: {
        name: "Manish Yadav",
        title: "Software Engineer | Java Developer",
        introduction: "Java developer with experience building RESTful APIs, backend services, real-time notification systems, and data-driven applications using Java and Spring Boot.",
        email1: "manishyadav.prodev@gmail.com",
        email2: "manish.ydv.sde@gmail.com",
        location: "Open to Opportunities in India",
        profileImages: [
          "assets/profile/image_1.jpg",
          "assets/profile/image_2.jpg",
          "assets/profile/image_3.jpg",
          "assets/profile/image_4.jpg",
          "assets/profile/image_5.jpg",
          "assets/profile/image_6.jpg"
        ],
        resume: "assets/resume/resume.pdf"
      },

  social: {
    github: "https://github.com/ManshYDV",
    linkedin: "https://www.linkedin.com/in/mansh-ydv/"
  },

  about: {
    description: "I am a Java developer focused on building reliable and maintainable backend applications. I have experience developing RESTful APIs, real-time notification services, database-driven applications, and backend workflows using Java, Spring Boot, Hibernate, and related technologies. I enjoy solving problems, improving existing systems, and learning technologies that help build scalable software."
  },

  skills: {
    Languages: [
      "Java",
      "JavaScript",
      "Python",
      "C"
    ],

    Frameworks: [
      "Spring",
      "Spring Boot",
      "Spring Data JPA",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "JDBC",
      "JWT"
    ],

    "Web Technologies": [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JSP",
      "Servlet",
      "XSL/XSLT",
      "jQuery"
    ],

    Databases: [
      "MySQL",
      "MongoDB"
    ],

    "Tools & Technologies": [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Maven",
      "Jira",
      "Apache Kafka",
      "JUnit 5",
      "Mockito"
    ],

    Concepts: [
      "OOP",
      "DSA",
      "DBMS",
      "REST API",
      "Microservices Architecture",
      "Agile",
      "Scrum"
    ],

    Exploring: [
      "AWS",
      "Docker",
      "Kubernetes"
    ]
  },

  experience: [
    {
      company: "ffizio Commute",
      role: "Java Developer",
      period: "May 2025 – Present",
      summary: "Developing backend services, RESTful APIs, real-time tracking workflows, and notification systems for transport applications.",
      details: {
        responsibilities: [
          "Developed and integrated multiple RESTful APIs for real-time GPS tracking, scheduling, and transport workflows.",
          "Rebuilt and implemented WhatsApp and SMS notification services using Termii and SMSLive247.",
          "Implemented caching for notification services to reduce redundant API and database calls.",
          "Developed backend workflows including student transfer functionality.",
          "Optimized a legacy data-processing module to improve performance and maintainability.",
          "Debugged and resolved production issues in real-time data pipelines and APIs."
        ],
        technologies: [
          "Java",
          "REST APIs",
          "WhatsApp APIs",
          "SMS APIs",
          "Caching",
          "Database",
          "Real-time Data Processing"
        ],
        projects: [
          "Real-time GPS tracking and transport workflows",
          "WhatsApp and SMS notification services"
        ],
        achievements: [
          "Enabled real-time notifications for systems processing approximately 60K events per day.",
          "Reduced redundant API and database calls by approximately 30–40% through caching."
        ],
        additionalInformation: "Worked in an Agile environment with a focus on system stability, backend development, debugging, and performance optimization."
      }
    },

    {
      company: "It Hub Software Solutions",
      role: "Java Developer Intern",
      period: "Jan 2025 – Apr 2025",
      summary: "Developed and tested REST APIs using Spring Boot and Hibernate with a focus on reliable backend communication.",
      details: {
        responsibilities: [
          "Developed REST APIs using Spring Boot and Hibernate.",
          "Implemented validation and error handling for consistent client-server communication.",
          "Tested and debugged APIs using Postman.",
          "Worked on improving backend performance and data flow reliability."
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "Hibernate",
          "REST APIs",
          "Postman"
        ],
        projects: [],
        achievements: [
          "Improved backend data flow reliability through API validation and error handling."
        ],
        additionalInformation: "Worked in a software development internship environment focused on Java backend development."
      }
    }
  ],

  projects: [
    {
      id: "project-1",
      name: "Amazon Clone",
      thumbnail: "assets/projects/project-1/thumbnail.svg",
      shortDescription: "A full-stack e-commerce application with a responsive frontend and secure Spring Boot backend.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "MySQL",
        "MongoDB",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github: "",
      liveDemo: "",
      details: {
        description: "Developed an e-commerce application inspired by Amazon, combining a responsive frontend with a secure and scalable backend.",
        problem: "Build an e-commerce platform capable of handling product management, user authentication, and data persistence.",
        features: [
          "Responsive e-commerce frontend",
          "RESTful backend APIs",
          "Authentication and authorization",
          "JWT-based security",
          "Product management",
          "Database integration"
        ],
        architecture: "Spring Boot backend using Spring Data JPA and Spring Security, with MySQL and MongoDB for data persistence.",
        challenges: [
          "Implementing secure authentication and authorization",
          "Working with both relational and non-relational databases"
        ],
        solutions: [
          "Implemented Spring Security with JWT-based authentication",
          "Used Spring Data JPA for relational data access and MongoDB for unstructured data"
        ],
        impact: "Demonstrates full-stack development experience with Java, Spring Boot, security, and database technologies.",
        screenshots: [
          "assets/projects/project-1/screenshot-1.svg",
          "assets/projects/project-1/screenshot-2.svg"
        ]
      }
    },

    {
      id: "project-2",
      name: "Spring Based Web Application",
      thumbnail: "assets/projects/project-1/thumbnail.svg",
      shortDescription: "A product management web application built using Spring MVC, Hibernate, JSP, and MySQL.",
      technologies: [
        "Java",
        "Spring Framework",
        "Spring ORM",
        "Hibernate",
        "JSP",
        "HTML",
        "CSS",
        "Bootstrap",
        "MySQL"
      ],
      github: "https://github.com/ManshYDV/Product-Management",
      liveDemo: "",
      details: {
        description: "Built a product management web application using the Spring MVC architecture and Hibernate.",
        problem: "Create a maintainable web application for managing product-related data.",
        features: [
          "Product management",
          "Database persistence",
          "MVC-based architecture",
          "Server-side web application"
        ],
        architecture: "Implemented using the Spring MVC pattern with Hibernate for database persistence and JSP for the presentation layer.",
        challenges: [
          "Maintaining separation between application layers",
          "Managing database persistence"
        ],
        solutions: [
          "Applied the MVC design pattern",
          "Used Hibernate for database interaction"
        ],
        impact: "Improved modularity and maintainability through MVC-based application architecture.",
        screenshots: []
      }
    },

    {
      id: "project-3",
      name: "Record Notes",
      thumbnail: "assets/projects/project-1/thumbnail.svg",
      shortDescription: "A Java web application for efficient record management and persistent data storage.",
      technologies: [
        "Java",
        "Hibernate",
        "JSP",
        "HTML",
        "CSS",
        "Bootstrap",
        "MySQL",
        "OOP"
      ],
      github: "https://github.com/ManshYDV/RecordNotes",
      liveDemo: "",
      details: {
        description: "Expanded a Java web application with a backend for efficient record management, persistence, and retrieval.",
        problem: "Provide reliable management and persistence of application records.",
        features: [
          "Record management",
          "Data persistence",
          "Record retrieval",
          "Error handling"
        ],
        architecture: "Java web application using Hibernate for persistence and MySQL as the database.",
        challenges: [
          "Maintaining data consistency and integrity"
        ],
        solutions: [
          "Implemented appropriate error handling and database persistence mechanisms"
        ],
        impact: "Enabled efficient record management with reliable data persistence and retrieval.",
        screenshots: []
      }
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Government Engineering College, Modasa",
      year: "2022 – 2025",
      details: "Bachelor of Engineering in Computer Engineering",
      score: "CGPA: 7.65/10.0"
    },
    {
      degree: "Diploma Computer Engineering",
      institution: "Government Polytechnic College, Dahod",
      year: "2029 – 2022",
      details: "Diploma in Computer Engineering",
      score: "CGPA: 7.05/10.0"
    }
  ]

};
