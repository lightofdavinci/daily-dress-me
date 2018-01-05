import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '200px',
          width: '400px',
          margin: '30px',
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.6)'
        }}
      >
        <p style={{ color: '#2a68cc', fontFamily: 'sans-serif' }}>
          Example: Icon
        </p>
        <p style={{ color: '#2a68cc', fontFamily: 'sans-serif' }}>
          Example: {this.props.temperature} Degrees F
        </p>
        <p style={{ color: '#2a68cc', fontFamily: 'sans-serif' }}>
          Example: {this.props.location}
        </p>
      </div>
    );
  }
}

export default Display;
