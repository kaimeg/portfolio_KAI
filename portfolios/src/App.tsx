import React, { Component } from 'react';
import SkillList, { Skill } from './SkillList';

import './App.css';

class App extends Component {
  render() {
    const skills: Skill[] = [
      {
        id: 1,
        name: 'Java',
        age: 2,
        coment: 'FWはSpring',
      },
      {
        id: 2,
        name: 'JavaScript',
        age: 2,
      },
      {
        id: 3,
        name: 'C#',
        age: 0.5,
      },
      {
        id: 4,
        name: 'VisualBasic',
        age: 0.5,
      },
      {
        id: 5,
        name: 'Oracle',
        age: 2,
        coment: 'チューニング勉強中',
      },
    ];

    return (
      <div className="container">
        <header>
          <h1>Skill一覧</h1>
        </header>
        <SkillList school="プログラミング" skills={skills} />
      </div>
    );
  }
}

export default App;
