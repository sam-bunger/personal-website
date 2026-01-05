import React from "react";
import ProjectCard, { Project } from "../components/ProjectCard";
import driftImage from "../assets/drift.png";
import faceoffImage from "../assets/faceoff.png";
import aysImage from "../assets/ays.png";
import { VXNLogo } from "../components/VxnLogo";

const projects: Project[] = [
  {
    number: "01",
    title: "Drift.io",
    description:
      "A multiplayer web racing game built with our own in-house game engined designed specifically to run on the web. ",
    tags: [
      "C++",
      "Emscripten",
      "Magnum",
      "Bullet3 Physics",
      "WebRTC",
      "WebGL",
      "Kubernetes",
      "Node.js",
    ],
    link: "https://drift.io",
    year: "2024-2025",
    image: driftImage,
  },
  {
    number: "02",
    title: "Faceoff",
    description:
      "A fast-paced multiplayer music trivia game where players compete head-to-head to identify songs from short clips. Built for IOS and Android.",
    tags: ["Typescript", "Node.js", "Websockets"],
    link: "https://www.volleygames.com/skills/faceoff-song-quiz",
    year: "2022-2024",
    image: faceoffImage,
  },
  {
    number: "03",
    title: "Are You Smarter Than A 5th Grader Trivia Game",
    description:
      "A trivia game for Alexa devices and Fire TV. Answer some of the toughest questions from 1st grade up to 5th grade. Challenge opponents in one-on-one games and get to the top of the leaderboard—proving you're not only smarter than a 5th grader; you're smarter than everyone else!",
    tags: ["Typescript", "React", "Node.js"],
    link: "https://www.volleygames.com/skills/are-you-smarter-than-a-5th-grader",
    year: "2021",
    image: aysImage,
  },
  {
    number: "04",
    title: "Vxn Games",
    description:
      "A website for playing phone connected party games similar to Jackbox TV featuring four games with unique play styles and designs.",
    tags: ["Typescript", "React", "Node.js", "Websocket", "Redis"],
    link: "/vxn-products",
    year: "2019-2020",
    logo: <VXNLogo />,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects__container container">
        <div className="projects__header">
          <div className="projects__intro">
            <span className="projects__section-number">02</span>
            <span className="projects__section-label">SELECTED WORK</span>
          </div>

          <h1 className="projects__title">PROJECTS</h1>

          <div className="projects__divider"></div>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        <div className="projects__footer">
          <div className="projects__footer-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
