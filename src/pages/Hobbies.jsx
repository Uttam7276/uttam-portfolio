
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
<footer style="text-align:center; padding: 20px; color: #666; font-size: 14px; border-top: 1px solid #ddd; margin-top: 40px;">
  © 2025 Uttam Chaudhary
</footer>
`;
  return <div dangerouslySetInnerHTML={{__html: html}}/>;
}
