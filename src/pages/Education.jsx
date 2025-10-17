import React from 'react';

export default function Education() {
  const html = `
    <section class="card">
      <h2>Education</h2>
      <table class="edu-table">
        <thead>
          <tr>
            <th>Class / Degree</th>
            <th>Institution</th>
            <th>Marks / Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor of Technology (CSE)</td>
            <td>Pimpri Chinchwad University</td>
            <td>9.5 CGPA</td>
          </tr>
          <tr>
            <td>Higher Secondary (12th)</td>
            <td>Madhav International School</td>
            <td>85%</td>
          </tr>
          <tr>
            <td>Secondary (10th)</td>
            <td>Madhav International School</td>
            <td>75%</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
  
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
