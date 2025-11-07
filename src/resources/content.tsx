import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Saif",
  lastName: "Malik",
  name: `Saif Malik`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpeg",
  email: "official.saifmalik@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

// TODO: need to setup subscription
const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saif-malik-01",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saif-malik-877321206/",
  },
  {
    name: "Leetcode",
    icon: "leetcode",
    link: "https://leetcode.com/u/pixei/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer Building Real-World Impact with Code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Quik - CDN</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/quik-cdn",
  },
  subline: (
    <>
      Building scalable, high-impact apps that users love plus passion projects
      that solve real problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/saif-malik-ovqayw",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I believe in first principle thinking, and I love challenges where it
        solves the real purpose, where I learn, grow, contribute.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Aaizel Technologies Pvt. Ltd",
        timeframe: "2025 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Teck Stack: Kafka, WebSockets, OAuth 2.0, Node.js, Redis, REST APIs,
            Docker, PostgreSQL.
          </>,
          <>
            Optimized News Analytics backend by enhancing Kafka AI consumer
            service with batching and connection pooling, improving processing
            throughput by 9%.
          </>,
          <>
            Developed a high-performance News Socket Service handling 100+
            concurrent connections with 1K+ messages/sec throughput.
          </>,
          <>
            Implemented an SSO service using OAuth 2.0, enabling single sign-on
            across all company products and increasing user adoption by 24%.
          </>,
        ],
        images: [],
      },
      {
        company: "Fuelcab India",
        timeframe: "2024 - 2025",
        role: "Software Engineer",
        achievements: [
          <>
            Tech Stack: Node.js, REST APIs, Prometheus, Grafana, Testing, Redis,
            PostgreSQL, Docker.
          </>,
          <>
            Developed Fuel Booking REST API for company products, supporting
            integration with other services and used by 2K+ beta users.
          </>,
          <>
            Integrated Prometheus and Grafana to add load metrics to the
            authentication service, improving issue detection and system
            monitoring.
          </>,
          <>
            Implemented unit tests for all authentication REST API routes and
            performed end-to-end integration testing.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "GBPIET",
        description: <>Computer Science & Engineering (AI&ML)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Have work in vast languages.</>,
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "C++",
            icon: "cpp",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "SQL",
            icon: "sql",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        images: [],
      },
      {
        title: "Frameworks",
        description: <>Building next gen apps with advanced frameworks.</>,
        tags: [
          {
            name: "NodeJS",
            icon: "nodejs",
          },
          {
            name: "Expressjs",
            icon: "expressjs",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "Sprint boot",
            icon: "springboot",
          },
          {
            name: "Nestjs",
            icon: "nestjs",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
          {
            name: "Reactjs",
            icon: "reactjs",
          },
          {
            name: "React Native",
            icon: "reactnative",
          },
          {
            name: "Jest",
            icon: "jest",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [],
      },
      {
        title: "Tools",
        description: (
          <>Great tools provide realibility and make system scalable.</>
        ),
        tags: [
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kafka",
            icon: "kafka",
          },
          {
            name: "Prometheus",
            icon: "prometheus",
          },
          {
            name: "Grafana",
            icon: "grafana",
          },
          {
            name: "Prefect",
            icon: "prefect",
          },
          {
            name: "GIT",
            icon: "git",
          },
          {
            name: "GraphQL",
            icon: "graphqL",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        images: [],
      },
      {
        title: "Platforms",
        description: <>Where the magic happends.</>,
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "GCP",
            icon: "gcp",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work };
