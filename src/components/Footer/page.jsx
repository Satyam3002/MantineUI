import { Container, Group, Stack, Text, Image, Button } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

import "./Footer.css";

const FooterSection = ({ title, links }) => (
  <Stack className="footer-section">
    <Text className="section-title">{title}</Text>
    {links.map((link, index) => (
      <Text component="a" href="#" key={index} className="footer-link">
        {link}
      </Text>
    ))}
  </Stack>
);

const Footer = () => {
  const sections = {
    company: {
      title: "Company",
      links: [
        "About Us",
        "Legal",
        "Privacy Policy",
        "Careers",
        "In Media",
        "Contact Us",
        "GFG Corporate Solution",
        "Placement Training Program",
      ],
    },
    explore: {
      title: "Explore",
      links: [
        "Job-A-Thon Hiring Challenge",
        "Hack-A-Thon",
        "GfG Weekly Contest",
        "Offline Classes (Delhi/NCR)",
        "DSA in JAVA/C++",
        "Master System Design",
        "Master CP",
        "GeeksforGeeks Videos",
        "Geeks Community",
      ],
    },
    languages: {
      title: "Languages",
      links: [
        "Python",
        "Java",
        "C++",
        "PHP",
        "GoLang",
        "SQL",
        "R Language",
        "Android Tutorial",
      ],
    },
    dsa: {
      title: "DSA",
      links: [
        "Data Structures",
        "Algorithms",
        "DSA for Beginners",
        "Basic DSA Problems",
        "DSA Roadmap",
        "DSA Interview Questions",
        "Competitive Programming",
      ],
    },
    dataScience: {
      title: "Data Science & ML",
      links: [
        "Data Science With Python",
        "Data Science For Beginner",
        "Machine Learning",
        "ML Maths",
        "Data Visualisation",
        "Pandas",
        "NumPy",
        "NLP",
        "Deep Learning",
      ],
    },
    webTech: {
      title: "Web Technologies",
      links: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "NextJS",
        "NodeJs",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    databases: {
      title: "Databases",
      links: ["SQL", "MySQL", "PostgreSQL", "PL/SQL", "MongoDB"],
    },
    preparation: {
      title: "Preparation Corner",
      links: [
        "Company-Wise Recruitment Process",
        "Resume Templates",
        "Aptitude Preparation",
        "Puzzles",
        "Company-Wise Preparation",
        "Companies",
        "Colleges",
      ],
    },
    exams: {
      title: "Competitive Exams",
      links: [
        "JEE Advanced",
        "UGC NET",
        "UPSC",
        "SSC CGL",
        "SBI PO",
        "SBI Clerk",
        "IBPS PO",
        "IBPS Clerk",
      ],
    },
    tools: {
      title: "Free Online Tools",
      links: [
        "Typing Test",
        "Image Editor",
        "Code Formatters",
        "Code Converters",
        "Currency Converter",
        "Random Number Generator",
        "Random Password Generator",
      ],
    },
    gate: {
      title: "GATE",
      links: [
        "GATE CS & IT Test Series - 2025",
        "GATE DA Test Series 2025",
        "GATE CS & IT Course - 2025",
        "GATE DA Course 2025",
        "GATE Rank Predictor",
      ],
    },
  };

  return (
    <footer className="footer">
      <Container size="xl">
        <div className="footer-content">
          <Stack className="company-info">
            <Image
              src="https://media.geeksforgeeks.org/auth-dashboard-uploads/gfgFooterLogo.png"
              alt="GeeksforGeeks"
              width={200}
            />

            <Stack className="address-section">
              <Group className="group">
                <Image
                  src="https://media.geeksforgeeks.org/img-practice/Location-1685004904.svg"
                  alt="Location Icon"
                  width={20}
                />
                <Text fw={500}>Corporate Address:</Text>
              </Group>
              <Text>
                A-143, 7th Floor, Sovereign Corporate Tower, Sector-136, Noida,
                Uttar Pradesh (201305)
              </Text>

              <Group className="group">
                <Image
                  src="https://media.geeksforgeeks.org/img-practice/Location-1685004904.svg"
                  alt="Location Icon"
                  width={20}
                />
                <Text fw={500}>Registered Address:</Text>
              </Group>
              <Text>
                K 061, Tower K, Gulshan Vivante Apartment, Sector 137, Noida,
                Gautam Buddh Nagar, Uttar Pradesh, 201305
              </Text>
            </Stack>

            <Group className="social-links">
              <Button
                variant="subtle"
                className="social-button"
                style={{ backgroundColor: "gray", color: "white" }}
              >
                <IconBrandFacebook size={20} />
              </Button>
              <Button
                variant="subtle"
                className="social-button"
                style={{ backgroundColor: "gray", color: "white" }}
              >
                <IconBrandInstagram size={20} />
              </Button>
              <Button
                variant="subtle"
                className="social-button"
                style={{ backgroundColor: "gray", color: "white" }}
              >
                <IconBrandLinkedin size={20} />
              </Button>
              <Button
                variant="subtle"
                className="social-button"
                style={{ backgroundColor: "gray", color: "white" }}
              >
                <IconBrandTwitter size={20} />
              </Button>
              <Button
                variant="subtle"
                className="social-button"
                style={{ backgroundColor: "gray", color: "white" }}
              >
                <IconBrandYoutube size={20} />
              </Button>
            </Group>

            <Group className="app-links">
              <Image
                src="https://media.geeksforgeeks.org/auth-dashboard-uploads/googleplay-%281%29.png"
                alt="Get it on Google Play"
                width={140}
              />
              <Image
                src="https://media.geeksforgeeks.org/auth-dashboard-uploads/appstore-%281%29.png"
                alt="Download on App Store"
                width={140}
              />
            </Group>

            <Button className="advertise-button " fullWidth>
              Advertise with us
            </Button>
          </Stack>

          <div className="footer-sections">
            {Object.entries(sections).map(([key, section]) => (
              <FooterSection
                key={key}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
