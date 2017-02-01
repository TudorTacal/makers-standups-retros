import React from 'react';
import Column from '../Column';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Standups & Retros</h1>
        <Column title="Learnt"/>
        <Column title="Learning"/>
        <Column title="Blocked"/>
      </div>


    )
  }
}
export default Layout;
