import {
  Card,
  Text,
  Group,
  Button,
  Container,
  Title,
  Badge,
  Stack,
} from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import "./Course.css";

const CourseCard = ({
  title,
  rating,
  level,
  interestedCount,
  cardClass,
  icon,
  bgImage,
}) => {
  return (
    <Card className="course-card ">
      <div
        className={`course-header ${cardClass}`}
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        <Text className="header-icon">{icon}</Text>
      </div>

      <Stack className="card-content " p="lg">
        <Text fw={600} lineClamp={2}>
          {title}
        </Text>

        <Group>
          <Text className="text-gray-500">📊 {level}</Text>
        </Group>

        <Group
          className="exploreoption"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text size="sm" className="text-gray-500">
            📈 {interestedCount}+ interested Geeks
          </Text>
          <Button variant="subtle" className="text-green-600">
            Explore now
          </Button>
        </Group>

        <Text className="refund-badge " radius="xl">
          <span className="refund-text">Refund of 90%</span> is available on
          this course
        </Text>
      </Stack>
    </Card>
  );
};

const CoursesSection = () => {
  const courses = [
    {
      title: "DSA to Development: A Complete Guide",
      level: "Beginner to Advance",
      interestedCount: "495k",
      cardClass: "dsa-header",
      bgImage:
        "https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/Course_DSA_to_Dev_1720846081_1736594558.webp",
    },
    {
      title: "JAVA Backend Development - Live",
      
      level: "Intermediate and Advance",
      interestedCount: "282k",
      cardClass: "backend-header",
      bgImage:
        "https://media.geeksforgeeks.org/img-practice/prod/courses/227/Web/Content/backend_dev_1736591964.webp",
    },
    {
      title: "Tech Interview 101",
      rating: "4.9",
      level: "Beginner to Advance",
      interestedCount: "322k",
      cardClass: "tech-header",
      bgImage:
        "https://media.geeksforgeeks.org/img-practice/prod/courses/458/Web/Content/Course_Tech_Int_1720846791_1736594646.webp",
    },
    {
        title: "DSA to Development: A Complete Guide",
        rating: "4.4",
        level: "Beginner to Advance",
        interestedCount: "495k",
        cardClass: "dsa-header",
        bgImage:
          "https://media.geeksforgeeks.org/img-practice/prod/courses/504/Web/Content/Course_DSA_to_Dev_1720846081_1736594558.webp",
      },
      {
        title: "JAVA Backend Development - Live",
        rating: "4.7",
        level: "Intermediate and Advance",
        interestedCount: "282k",
        cardClass: "backend-header",
        bgImage:
          "https://media.geeksforgeeks.org/img-practice/prod/courses/227/Web/Content/backend_dev_1736591964.webp",
      },
      {
        title: "Tech Interview 101 - From DSA to System Design for Working...",
        rating: "4.9",
        level: "Beginner to Advance",
        interestedCount: "322k",
        cardClass: "tech-header",
        bgImage:
          "https://media.geeksforgeeks.org/img-practice/prod/courses/458/Web/Content/Course_Tech_Int_1720846791_1736594646.webp",
      },
  ];

  return (
    <Container className="Container1">
      <Group  className="course-header-group" position="apart" >
        <Title order={2} className="CoursesText"  >Courses</Title>
        <Button className="viewbtn" variant="outline" radius="xl">
          View All
        </Button>
      </Group>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </Container>
  );
};

export default CoursesSection;
