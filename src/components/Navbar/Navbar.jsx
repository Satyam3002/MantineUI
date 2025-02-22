import React, { useState } from "react";
import { Menu, Search, Moon, Bell, Users, ChevronDown } from "lucide-react";
import { Burger, Drawer, Button, Menu as MantineMenu, Group, Text, Divider } from "@mantine/core";
import "@mantine/core/styles.css";

const menuItems = {
  Courses: [
    "For Working Professionals",
    "Data Structures & Algorithms",
    "Complete Interview Preparation",
    "All Courses"
  ],
  Tutorials: [
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "Web Development",
    "Machine Learning",
    "View All"
  ],
  Jobs: ["Apply for Jobs", "Hire with us", "Job Events & Contests", "Resume Resources"],
  Practice: ["Problem of the Day", "Topic Wise Practice", "Company Wise Practice", "Contests"],
  Contests: ["GfG Weekly [Rated Contest]", "Job-A-Thon Hiring Challenge", "All Contests and Events"]
};

const trendingItems = [
  "Trending Now", "DSA", "Web Tech", "Foundational Courses", "Data Science",
  "Practice Problem", "Python", "Machine Learning", "JavaScript", "System Design",
  "Java", "C++", "Django", "React"
];

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000, backgroundColor: "white", borderBottom: "1px solid #e5e7eb", padding: "1rem 0rem" }}>
      <Group position="apart" justify="space-between" style={{ padding: "0 1rem" }}>
        {/* Left Section */}
        <Group spacing="md" visibleFrom="lg">
          {Object.entries(menuItems).map(([category, items]) => (
            <MantineMenu key={category} shadow="md" width={220} withinPortal>
              <MantineMenu.Target>
                <Button 
                  variant="subtle" 
                  rightIcon={<ChevronDown size={16} className="menu-arrow" />} 
                  className="menu-button"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  {category}
                </Button>
              </MantineMenu.Target>
              <MantineMenu.Dropdown style={{ zIndex: 1100 }}> 
                {items.map((item, index) => (
                  <MantineMenu.Item key={index}>{item}</MantineMenu.Item>
                ))}
              </MantineMenu.Dropdown>
            </MantineMenu>
          ))}
        </Group>

        {/* Center - Logo */}
        <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="GfG Logo" style={{ height: "40px" }} />

        {/* Right Section */}
        <Group spacing="md">
          <Search size={20} />
          <Moon size={20} />
          <Bell size={20} />
          <Users size={20} />
          <Button variant="filled" color="dark">Sign In</Button>
          <Burger opened={mobileMenuOpened} onClick={() => setMobileMenuOpened((o) => !o)} size="sm" hiddenFrom="lg" />
        </Group>
      </Group>
      
      {/* Divider Line */}
      <Divider my="sm" />

      {/* Mobile Menu */}
      <Drawer opened={mobileMenuOpened} onClose={() => setMobileMenuOpened(false)} padding="md" title="Menu">
        {Object.entries(menuItems).map(([category, items]) => (
          <div key={category}>
            <Text weight={500}>{category}</Text>
            {items.map((item, index) => (
              <Text key={index} style={{ paddingLeft: "1rem" }}>{item}</Text>
            ))}
          </div>
        ))}
      </Drawer>

      {/* Trending Bar */}
      <div style={{ display: "flex", gap: "3rem", padding: "0.3rem 2rem", overflowX: "auto", whiteSpace: "nowrap" }}>
        {trendingItems.map((item) => (
          <span key={item} style={{ fontSize: "0.875rem", cursor: "pointer" }}>{item}</span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

/* CSS */
const styles = `
  .menu-button:hover .menu-arrow {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }

  /* Ensure dropdown is on top */
  .mantine-Menu-dropdown {
    z-index: 1100 !important;
  }
`;
const styleTag = document.createElement("style");
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
