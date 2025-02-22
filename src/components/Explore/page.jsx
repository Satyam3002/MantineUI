import React from 'react';
import { Container, Title, Card, Text } from '@mantine/core';
import { ArrowRight } from 'lucide-react';
import './Explore.css';

const Explore = () => {
  const exploreItems = [
    {
      title: 'Data Structure and Algorithms',
      color: 'emerald'
    },
    {
      title: 'Practice DSA',
      color: 'indigo'
    },
    {
      title: 'Web Development',
      color: 'rose'
    },
    {
      title: 'AI ML & Data Science',
      color: 'purple'
    },
    {
      title: 'Python',
      color: 'teal'
    },
    {
      title: 'Machine Learning',
      color: 'blue'
    },
    {
      title: 'System Design',
      color: 'orange'
    },
    {
      title: 'DevOps',
      color: 'pink'
    }
  ];

  return (
    <Container className="explore-container1">
      <Title className="section-title">Explore</Title>
      
      <div className="explore-grid">
        {exploreItems.map((item, index) => (
          <Card 
            key={index}
            className={`explore-card ${item.color}`}
            component="a"
            href="#"
          >
            <Text className="card-title">{item.title}</Text>
            <button className="view-more-btn">
              View more
              <ArrowRight size={16} />
            </button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Explore;