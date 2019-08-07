import React, { Component } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

export interface Skill {
  id: number;
  name: string;
  age: number;
  coment?: string;
}

interface SkillListProps {
  school: string;
  skills: Skill[];
}

class SkillList extends Component<SkillListProps> {
  render() {
    const { school, skills } = this.props;

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {skills.map(c => (
            <Item key={c.id}>
              <Icon name="heart" size="huge" />
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>
                <Item.Meta>{c.age}年</Item.Meta>
                <Item.Meta>{c.coment ? c.coment : '???'}</Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
}

export default SkillList;
