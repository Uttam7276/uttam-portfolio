import React from 'react';

export default function Experience() {
  const html = `
    <section class="card">
      <h2>Experience</h2>

      <div class="exp-item">
        <h3>Open to Opportunities</h3>
        <p>Currently a B.Tech CSE student</p>
        <p>Eager to explore new technologies and always open to exciting opportunities to grow and contribute.</p>
      </div>

      <div class="exp-item">
        <h3>Personal Projects</h3>
        <p>2023 – Present</p>
        <p>Developed multiple projects including a Face Recognition Application for Attendance Marking, portfolio website, and small Python utilities.</p>
      </div>

      <div class="exp-item">
        <h3>Learning Journey</h3>
        <p>2023 – Present</p>
        <p>Working on personal projects and continuously learning new tools, frameworks, and technologies in web development.</p>
      </div>
    </section>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
