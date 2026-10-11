export const profile = {
    name: "Abu Talha",
    title: "Full Stack Developer and AI/ML Engineer",
    objective:
        "I build reliable web experiences, AI-powered product features, and practical software systems that connect technical depth with user-centered outcomes.",
    location: "Bhopal, Madhya Pradesh, India",
    phone: "+91 6261525219",
    email: "abutalhaa551@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/abu-talha-22968128b",
    githubUrl: "https://github.com/abu-talha-01",
    portfolioUrl: "https://abu-talha-01-github-io.vercel.app/#",
} as const;

export const navigation = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
    {
        title: "Languages",
        items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS", "PHP"],
        tone: "default",
    },
    {
        title: "Frameworks",
        items: [
            "React.js",
            "React Native",
            "Node.js",
            "Express.js",
            "Django",
            "Django REST Framework",
            "FastAPI",
            "Spring Boot",
            "Laravel",
            "Bootstrap",
            "Tailwind CSS",
        ],
        tone: "default",
    },
    {
        title: "Databases",
        items: ["MySQL", "MongoDB", "MSSQL"],
        tone: "default",
    },
    {
        title: "AI/ML",
        items: [
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "LLM and RAG pipelines",
        ],
        tone: "default",
    },
    {
        title: "Tools",
        items: [
            "Git",
            "GitHub",
            "Postman",
            "REST APIs",
            "JWT Authentication",
            "VS Code",
        ],
        tone: "default",
    },
    {
        title: "Learning",
        items: [
            "LangChain",
            "LangGraph",
            "ChromaDB",
            "MCP",
            "Data Structures and Algorithms",
            "OS",
            "DBMS",
            "Computer Networks",
            "System Design",
        ],
        tone: "learning",
    },
] as const;

export const education = [
    {
        degree: "B.Tech, Computer Science and Engineering",
        institution: "All Saints College of Technology, Bhopal",
        period: "2023 - 2027",
        result: "CGPA: 7.79",
    },
] as const;

export const experience = [
    {
        role: "Full Stack Developer",
        company: "Oasis Academy, Bhopal",
        period: "Jan 2025 - Jun 2025",
        points: [
            "Built an OPD Management System with an LLM-powered RAG assistant (Django REST Framework + React) for natural-language search over patient records.",
            "Designed secure, scalable REST APIs with optimized database schemas.",
        ],
    },
    {
        role: "Trainee Frontend Developer",
        company: "BlackCherries Innovative Lab LLP, Bhopal",
        period: "Jan 2025 - Dec 2025",
        points: [
            "Built a History Learning Platform with user authentication (Java Spring Boot backend, HTML/CSS/JavaScript frontend) and designed its UI/UX; completed a 12-month internship with live client project delivery.",
        ],
    },
    {
        role: "Python Backend and UI/UX Developer",
        company: "Wenodo Digital Solutions, Bhopal",
        period: "2024 - 2025",
        points: [
            "Developed and optimized REST APIs with Django REST Framework, reducing response latency; built responsive pages with HTML, CSS, Bootstrap and JavaScript.",
        ],
    },
    {
        role: "Co-Trainer, Python and Web Development",
        company: "Orange Antelopes, Bhopal",
        period: "Jul 2024 - Nov 2024",
        points: [
            "Trained learners in Python, Django, SQL, web development and AI/ML basics; reviewed student code and mentored full-stack projects.",
        ],
    },
] as const;

export const projects = [
    {
        name: "OPD Management System with LLM RAG Assistant",
        type: "Healthcare platform",
        description:
            "Hospital platform with natural-language querying of patient records.",
        stack: ["Python", "Django REST Framework", "React", "LLM", "RAG"],
    },
    {
        name: "Employee Management System",
        type: "HR platform",
        description:
            "HR platform with attendance, analytics dashboard, JWT authentication and REST APIs.",
        stack: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
        name: "E-Commerce Web Application",
        type: "Storefront",
        description:
            "Storefront with product catalog, secure login and order management.",
        stack: ["Django REST Framework", "React", "MySQL", "JWT"],
    },
    {
        name: "House Price Prediction",
        type: "ML pipeline",
        description:
            "Regression pipeline evaluated with RMSE and R-squared.",
        stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    },
] as const;

export const certifications = [
    "Python and Django Development",
    "Machine Learning Fundamentals",
    "DELF A2 (French)",
] as const;

export const languages = ["English", "Hindi", "Urdu", "French (DELF A2)"] as const;
