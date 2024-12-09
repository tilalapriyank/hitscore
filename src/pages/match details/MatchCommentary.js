import React, { Component } from 'react';

class MatchCommentary extends Component {
  render() {
    return (
      <div className="p-4 bg-light rounded shadow-sm">
        <h4 className="text-primary mb-3">Live Commentary</h4>
        <div className="overflow-auto" style={{ maxHeight: '300px' }}>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Over 12.4:</strong> Virat Kohli smashes a six over long-on.
            </li>
            <li className="list-group-item">
              <strong>Over 12.6:</strong> Dot ball, Babar Azam adjusts field placement.
            </li>
            <li className="list-group-item">
              <strong>Over 13.1:</strong> Bumrah bowls a yorker, dot ball!
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MatchCommentary;
