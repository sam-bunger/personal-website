import React from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Slipstream Games",
    role: "Co-Founder",
    period: "Oct 2024 - Present",
    location: "San Francisco, CA",
    description: [
      "Developed and launched the multiplayer web kart racing game drift.io, attracting over 100k monthly players across platforms including CrazyGames.com and our standalone domain",
      "Engineered a lightning-fast 3D Entity Component System (ECS) game engine with custom rendering pipeline, leveraging C++ libraries (Magnum, WebGL, EnTT, Bullet3) compiled to WebAssembly via Emscripten",
      "Implemented a custom object synchronization layer built on top of WebRTC and Websocket transport layers for reliable and low-latency multiplayer functionality",
      "Designed a C++ game server optimized to host over 60+ players and manage multiple physics simulation worlds on a single virtual CPU, achieving significant scale and cost-efficiency",
      "Built a TypeScript React UI layer for all game menus and interfaces",
    ],
    technologies: [
      "C++",
      "WebAssembly",
      "WebGL",
      "Magnum",
      "EnTT",
      "Bullet3",
      "Emscripten",
      "WebRTC",
      "TypeScript",
      "React",
    ],
  },
  {
    company: "Volley",
    role: "Senior Software Engineer",
    period: "Aug 2020 - Oct 2024",
    location: "San Francisco, CA",
    description: [
      "Spearheaded the development and launch of three new Alexa products with a 3-person team, generating over $10 million in additional ARR",
      "Developed backend services for enabling video calling between devices and facilitating real-time multiplayer gaming experiences",
      "Engineered scalable, company-wide services for content delivery and real-time leaderboards",
      "Created developer tooling to streamline game development using the internal game engine",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "AWS",
      "Kubernetes",
      "Docker",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    company: "Voxion Inc.",
    role: "Co-Founder and CTO",
    period: "Jan 2019 - Aug 2020",
    location: "New Haven, CT",
    description: [
      "Startup acquired by Volley Inc. in 2020",
      "Secured $150k in seed funding from angel investors",
      "Engineered a platform for building and deploying Voice Applications across Amazon Alexa and Google Assistant",
      "Leveraged the platform to develop a real-time, smartphone-connected party game for both Alexa and the web",
      "Spearheaded backend engineering, designing a microservices architecture that successfully scaled to support thousands of concurrent users",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "GCP",
      "Kubernetes",
      "Docker",
      "MySQL",
      "Redis",
    ],
  },
  {
    company: "Schneider Electric",
    role: "Software Engineering Intern",
    period: "Jun 2018 - May 2019",
    location: "West Kingston, RI",
    description: [
      "Designed and built a web application for Schneider's IT Division to help store, distribute, and visualize competitive intelligence",
    ],
    technologies: ["Apache", "MySQL", "PHP", "HTML", "CSS", "JavaScript"],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className="work-experience">
      <div className="work-experience__container container">
        <div className="work-experience__header">
          <div className="work-experience__intro">
            <span className="work-experience__section-number">03</span>
            <span className="work-experience__section-label">CAREER PATH</span>
          </div>

          <h1 className="work-experience__title">WORK EXPERIENCE</h1>

          <div className="work-experience__divider"></div>
        </div>

        <div className="work-experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="work-experience__item">
              <div className="work-experience__item-marker">
                <div className="work-experience__item-dot"></div>
                {index < experiences.length - 1 && (
                  <div className="work-experience__item-line"></div>
                )}
              </div>

              <div className="work-experience__item-content">
                <div className="work-experience__item-header">
                  <div className="work-experience__item-main">
                    <h3 className="work-experience__company">{exp.company}</h3>
                    <h4 className="work-experience__role">{exp.role}</h4>
                  </div>
                  <div className="work-experience__item-meta">
                    <span className="work-experience__period">
                      {exp.period}
                    </span>
                    <span className="work-experience__location">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="work-experience__description-list">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="work-experience__technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="work-experience__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="work-experience__footer">
          <div className="work-experience__footer-line"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
