import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';
export default observer(
  class App extends Component {
    componentWillMount() {
      this.props.store.loadUser();
    }

    render() {
      console.log(this.props.store.loading);

      if (this.props.store.loading) {
        return <div>loading</div>;
      }
      return (
        <div>
          <Devtools />
          {this.props.store.users.map(u => <div key={u.id}>{u.name}</div>)}
        </div>
      );
    }
  }
);
