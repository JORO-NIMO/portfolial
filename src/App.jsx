import React from 'react';
import About from './About';
import './About.css';

const sampleData = {
  name: 'Your Full Name Here',
  title: 'Senior Software Engineer • Product Builder • Community Mentor',
  mission: 'Build technology that empowers people and creates practical opportunity.',
  bio: 'I am a software engineer with X+ years building scalable web and mobile products across startups and mid-size teams. I lead projects from concept through launch and focus on human-centered systems.',
  skills: [
    'Backend systems, REST/GraphQL APIs, cloud architecture (AWS/GCP/Azure)',
    'React, TypeScript, accessible UI, responsive design',
    'SQL, data pipelines, analytics instrumentation',
    'Technical leadership, mentoring, roadmap planning'
  ],
  projects: [
    {
      title: 'MentorBridge',
      description: 'Connects learners to curated mentors and small project sprints to build portfolio-ready work.',
      tech: 'Node.js, Express, PostgreSQL, React, TypeScript',
      status: 'Active',
      link: 'https://example.com/mentorbridge'
    },
    {
      title: 'DebtSprint',
      description: 'Automated technical debt detection and sprint scheduling tool for engineering teams.',
      tech: 'Python, GitHub Actions, SonarQube, Prometheus',
      status: 'Pilot',
      link: 'https://example.com/debtsprint'
    }
  ],
  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://www.linkedin.com/in/your-profile'
  }
};

export default function App() {
  return <About data={sampleData} />;
}
