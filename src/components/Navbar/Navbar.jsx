import React, { useState } from "react";
import { Search, Moon, Bell, Users, ChevronDown, Menu as MenuIcon } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

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
    Jobs: [
      "Apply for Jobs",
      "Hire with us",
      "Job Events & Contests",
      "Resume Resources"
    ],
    Practice: [
      "Problem of the Day",
      "Topic Wise Practice",
      "Company Wise Practice",
      "Contests"
    ],
    Contests: [
      "GfG Weekly [Rated Contest]",
      "Job-A-Thon Hiring Challenge",
      "All Contests and Events"
    ]
  };

  const trendingItems = [
    "Trending Now",
    "DSA",
    "Web Tech",
    "Foundational Courses",
    "Data Science",
    "Practice Problem",
    "Python",
    "Machine Learning",
    "JavaScript",
    "System Design",
    "Java",
    "C++",
    "Django",
    "React",
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left Section */}
        <div className="nav-links">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="nav-item">
              <button className="menu-btn">
                {category}
                <ChevronDown className="chevron-icon" size={16} />
              </button>
              <div className="dropdown-menu">
                {items.map((item, index) => (
                  <div key={index} className="menu-dropdown-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Center - Logo */}
        <div className="nav-logo">
            <img
                src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
                alt="GfG Logo"
            />
        </div>

        {/* Right Section */}
        <div className="nav-icons">
          <div className="icon-group">
            <Search className="icon" size={20} />
            <Moon className="icon" size={20} />
            <Bell className="icon" size={20} />
            <Users className="icon" size={20} />
            <button className="sign-in-btn">Sign In</button>
          </div>

          <div
            className="mobile-menu-icon"
            onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
          >
            <MenuIcon size={24} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpened && (
        <div className="mobile-menu">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mobile-menu-category">
              <div className="mobile-menu-category-title">{category}</div>
              {items.map((item, index) => (
                <div key={index} className="mobile-menu-item">
                  {item}
                </div>
              ))}
            </div>
          ))}
          <div className="mobile-icon-group">
            <Search size={20} />
            <Moon size={20} />
            <Bell size={20} />
            <Users size={20} />
          </div>
          <button className="sign-in-btn mobile-sign-in">Sign In</button>
        </div>
      )}

      {/* Trending Bar */}
      <div className="trending-bar">
        {trendingItems.map((item) => (
          <span key={item} className="trending-item">
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;