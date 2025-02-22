import React from 'react';
import { Container, Title, Group, Card, Text } from '@mantine/core';
import { ArrowRight } from 'lucide-react';
import './MustExplore.css';

const MustExplore = () => {
  const exploreItems = [
    {
      title: 'Jobs for you',
      link: '#'
    },
    {
      title: 'Hire with us',
      link: '#'
    },
    {
      title: 'Advertise with Us',
      link: '#'
    },
    {
      title: 'Placement Training...',
      link: '#'
    }
  ];

  return (
    <Container className="must-explore-container">
      <Title className="section-title">Must Explore</Title>
      
      <div className="cards-container">
        {exploreItems.map((item, index) => (
          <Card
            key={index}
            className="explore-card1"
            component="a"
            href={item.link}
          >
            <div className="card-content">
              <Text className="card-title">{item.title}</Text>
              <ArrowRight className="arrow-icon" size={20} />
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MustExplore;