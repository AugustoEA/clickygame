import React, { Component } from 'react';
import CastCard from ".components/CastCard";
import Wrapper from ".components/Wrapper";
import Title from "./components/Title";
import cast from "./cast.json";

class App extends Component {
  state = {
    cast
  };

  removeCast = id => {
    const casts = this.state.casts.filter(cast => cast.id !== id);
    this.setState({ casts });
  };

  render() {
    return (
      <Wrapper>
        <Title>Predator</Title>
        {this.state.casts.map(cast => (
          <CastCard
            removeCast={this.removeCast}
            id={cast.id}
            key={cast.id}
            name={cast.name}
            image={cast.src}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
