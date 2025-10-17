
import React from 'react';

export default function Summary() {
  const html = `<section className="card">
    <h2>About Me</h2>
    <p>
      I am an enthusiastic Full Stack Developer with a strong foundation in both front-end and back-end technologies. I have hands-on experience with languages like Java, Python, and JavaScript, and frameworks such as React, Node.js, and Spring Boot.
      My areas of interest include web development, cloud computing, databases, and system design. I love turning ideas into functional applications and pay attention to creating clean, efficient, and scalable code.
      Beyond coding, I stay curious about emerging trends in AI, blockchain, and DevOps practices, which helps me keep my development approach future-ready. I also enjoy collaborating in teams, contributing to open-source projects, and continuously enhancing my problem-solving skills through coding competitions and hackathons.
    </p>
  </section>
<footer style="text-align:center; padding: 20px; color: #666; font-size: 14px; border-top: 1px solid #ddd; margin-top: 40px;">
  © 2025 Uttam Chaudhary
</footer>
`;
  return <div dangerouslySetInnerHTML={{__html: html}} />;
}
