
import React from 'react';

export default function Hobbies() {
  const html = `<section className="card">
    <h2>Hobbies</h2>
    <ul>
      <li>Gaming 🎮</li>
      <li>Video Editing 🎬</li>
      <li>Coding 💻</li>
      <li>Reading 📚</li>
      <li>Photography 📸</li>
      <li>Music 🎵</li>
    </ul>
  </section>
`;
  return <div dangerouslySetInnerHTML={{__html: html}}/>;
}
