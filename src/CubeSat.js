import React from 'react';
import './CubeSat.css';

function CubeSat() {
  return (
    <div className="cubesat-container">
      <h1 className="cubesat-title">CubeSat Project</h1>
      <div className="cubesat-description">
        <p>
          The CubeSat project is an ambitious initiative aimed at launching a small satellite into orbit. Our primary goal is to observe how algae responds to high-radiation environments in space, offering valuable insights into the impact of space radiation on biological organisms.
        </p>
        <p>
          <strong>Inspiration:</strong> The CubeSat program provides an affordable and scalable way for students and researchers to conduct scientific experiments in space. By focusing on how algae adapts to the harsh radiation of space, we aim to contribute to research on biological resilience and the feasibility of long-term space missions.
        </p>
        <p>
          <strong>What I Do:</strong> As the lead of the business team, I am responsible for raising over $40,000 in funding to support the project. This includes creating a detailed budget, collaborating with various university departments, and establishing partnerships with sponsors. Our engineering team will design and build a CubeSat equipped with sensors to monitor the algae and other key data.
        </p>
        <p>
          <strong>Technology Stack:</strong> We are using cutting-edge satellite technology, including low-power microcontrollers, radiation sensors, and efficient communication protocols to collect and transmit data. Our CubeSat will also feature specialized equipment to monitor the algae's response to radiation.
        </p>
        <p>
          <strong>Challenges:</strong> One of the key challenges is ensuring the CubeSat can operate effectively in the extreme environment of space. In addition to the technical challenges, raising the necessary funding to support the project and managing the logistics of a multi-department collaboration also present unique hurdles.
        </p>
      </div>
    </div>
  );
}

export default CubeSat;
