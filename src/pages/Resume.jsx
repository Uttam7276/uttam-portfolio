
import React from 'react';

export default function Resume() {
  const html = `<section className="card">
    <h2>Projects</h2>
    <ul>
        <li>
        <strong>Attendance Marking System using Face Recognition (Python)</strong><br>
        Developed a Python application that automatically marks attendance using face recognition. 
        Utilized libraries like <em>OpenCV, NumPy, and face_recognition</em> for image processing and facial detection.
        </li>
        <li>
        <strong>Personal Portfolio Website</strong><br>
        Designed and developed this portfolio website using <em>HTML, CSS, and JavaScript</em> to showcase my skills, projects, and contact information.
        <a href="index.html">🔗 Live Demo</a>
        </li>
    </ul>
  </section>
`;
  return <div dangerouslySetInnerHTML={{__html: html}} />;
}
