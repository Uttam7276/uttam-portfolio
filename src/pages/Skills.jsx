
import React from 'react';

export default function Skills() {
  const html = `<section className="card">
    <h2>Skills</h2>
    <div className="skill">
      <p>Java</p>
      <div className="progress"><div style="width: 75%"></div></div>
    </div>
    <div className="skill">
      <p>Python</p>
      <div className="progress"><div style="width: 70%"></div></div>
    </div>
    <div className="skill">
      <p>Html/CSS</p>
      <div className="progress"><div style="width: 75%"></div></div>
    </div>
    <div className="skill">
      <p>C/C++</p>
      <div className="progress"><div style="width: 70%"></div></div>
    </div>
  </section>
`;
  return <div dangerouslySetInnerHTML={{__html: html}} />;
}
