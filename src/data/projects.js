// ============================================================
// PROJECTS DATA - Verified Real Projects from Resume & Portfolio
// ============================================================

const projects = [
  {
    id: 1,
    title: "Sales Performance & Growth Analysis Dashboard",
    category: "Data Analytics",
    tools: "Microsoft Excel",
    organization: "Camerin Innovative | 2026",
    tags: ["Microsoft Excel", "DAX Measures", "Pivot Tables", "Slicers", "Time-Series Analysis"],
    description:
      "Interactive Excel dashboard tracking sales of 47.68+ Cr, 89,464 orders, and 28,639 customers. Analyzed 10 sales representatives and evaluated multi-year sales growth using DAX measures.",
    features: [
      "Tracked sales of 47.68+ Cr, 89,464 orders, and 28,639 customers",
      "Created dynamic slicers for year, product, and salesperson for in-depth slicing",
      "Analyzed 10 sales representatives and identified sales and order trends",
      "Evaluated sales growth from 2021 to 2024 using DAX measures and monthly time-series charts",
      "Analyzed the top five revenue-generating products and key margins",
    ],
    image: "/images/projects/excel-sales.jpg",
    viewUrl: "https://www.linkedin.com/posts/anuranjv_excel-dataanalytics-datavisualization-ugcPost-7510644043131981824-XqhQ/",
    githubUrl: "https://github.com/Anuranj-v",
    featured: true,
  },
  {
    id: 2,
    title: "Indian Bikes Sales & Market Analysis",
    category: "Data Analytics",
    tools: "Microsoft Power BI",
    organization: "Camerin Innovative | 2026",
    tags: ["Power BI", "Power Query", "DAX", "Data Cleaning", "Market Segmentation"],
    description:
      "End-to-end Power BI market analysis examining 1,000 bike models across eight manufacturers to evaluate pricing patterns, brand tiers, and consumer purchase behavior.",
    features: [
      "Analyzed 1,000 bike models across eight manufacturers to evaluate pricing & performance",
      "Used Power Query for ETL data cleaning, transformation, and preparation",
      "Segmented inventory into Budget, Mid-Range, and Premium categories",
      "Built interactive visuals and dashboards to compare brand pricing & market segments",
      "Examined pricing patterns and consumer purchase behavior across motorcycle brands",
    ],
    image: "/images/projects/powerbi-bikes.jpg",
    viewUrl: "https://www.linkedin.com/posts/anuranjv_powerbi-dataanalytics-datavisualization-ugcPost-7491142327172894720-Kh_m/",
    githubUrl: "https://github.com/Anuranj-v",
    featured: true,
  },
  {
    id: 3,
    title: "TimeShow – AI Movie Ticket Booking System (BCA Main Project)",
    category: "Full-Stack Development",
    tools: "React, Django, Python",
    organization: "Yeldo Baselios College (BCA Main Project)",
    tags: ["React", "Django", "Python", "SQLite", "TMDB API", "AI"],
    description:
      "BCA Main Project: An intelligent full-stack movie ticket booking web application with a live React frontend and Django REST framework backend. Features live movie listings, interactive seat reservation, TMDB API data synchronization, and proposed AI recommendations.",
    features: [
      "Live production deployment on Vercel with responsive React UI",
      "Django REST backend API & SQLite database architecture",
      "Interactive real-time seat reservation & showtime booking flow",
      "TMDB API integration for latest movie details & trailers",
      "Proposed AI-powered movie recommendation engine",
    ],
    image: "/images/projects/timeshow.jpg",
    viewUrl: "https://time-show.vercel.app",
    githubUrl: "https://github.com/Anuranj-v",
    featured: true,
  },
  {
    id: 4,
    title: "Care Crew – Local Skilled Worker Finder System (BCA Mini Project)",
    category: "Web Development",
    tools: "PHP, MySQL",
    organization: "Yeldo Baselios College (BCA Mini Project)",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    description:
      "BCA Mini Project: Care Crew is a web-based community platform connecting users with local skilled workers such as electricians, plumbers, and carpenters for hassle-free service booking and reviews.",
    features: [
      "User module: search, request services, and review local workers",
      "Worker module: profile setup, service offerings, and booking management",
      "Admin portal: verification, approval, and platform moderation",
      "Relational MySQL database backend with PHP server-side scripting",
    ],
    image: "/images/projects/carecrew.jpg",
    viewUrl: "https://www.linkedin.com/posts/anuranjv_bca-miniproject-webdevelopment-ugcPost-7445941497415512065-U7hV/",
    githubUrl: "https://github.com/Anuranj-v",
    featured: false,
  },
];

export default projects;
