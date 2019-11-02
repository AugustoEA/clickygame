import React, { Component } from 'react';
import MemberCard from "./components/MemberCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import members from "./members.json";

class App extends Component {
  state = {
    members
  };

  removeMember = id => {
    const members = this.state.members.filter(members => members.id !== id);
    this.setState({ members });
  };

  render() {
    return (
      <Wrapper>
        <Title>Predator & Friends!</Title>
        {this.state.members.map(members => (
          <MemberCard
            removeMember={this.removeMember}
            id={members.id}
            key={members.id}
            name={members.name}
            src={members.src}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
