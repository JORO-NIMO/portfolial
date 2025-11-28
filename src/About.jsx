import React from 'react';
import './About.css';

export default function About({ data }) {
  const d = data || {};
  return (
    <main className="about-container">
      <header className="about-hero">
        <div>
          <h1>{d.name || 'Your Full Name Here'}</h1>
          <p className="about-title">{d.title || 'Senior Software Engineer • Product Builder • Community Mentor'}</p>
          <p className="about-mission">{d.mission || 'Build technology that empowers people and creates practical opportunity.'}</p>
        </div>
        <div className="about-photo">Photo</div>
      </header>

      <section className="about-section">
        <h2>Personal Bio</h2>
        <p>{d.bio || 'I am a [profession] with X+ years building products across startups and mid-size teams.'}</p>
      </section>

      <section className="about-section">
        <h2>Key Strengths & Skills</h2>
        <ul>
          {(d.skills || [
            'Backend systems, REST/GraphQL APIs, cloud architecture',
            'React, TypeScript, accessible UI, responsive design',
            'SQL, data pipelines, analytics instrumentation',
            'Technical leadership, mentoring, roadmap planning'
          ]).map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section className="about-section">
        <h2>Projects (sample)</h2>
        {(d.projects || []).map((p, i) => (
          <article key={i} className="about-project">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><strong>Tech:</strong> {p.tech}</p>
            <p><strong>Status:</strong> {p.status}</p>
            {p.link && <p><a href={p.link}>{p.link}</a></p>}
          </article>
        ))}
      </section>

      <section className="about-section small">
        <h2>Contact</h2>
        <p>Email: {d.contact?.email || 'your.email@example.com'}</p>
        <p>LinkedIn: {d.contact?.linkedin || 'https://www.linkedin.com/in/your-profile'}</p>
      </section>

    </main>
  );
}
