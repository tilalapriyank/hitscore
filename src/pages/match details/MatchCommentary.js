import React, { Component } from 'react';

class MatchCommentary extends Component {
  render() {
    return (
      <div className="p-4 bg-white rounded shadow-sm border">
      <div className="text-center bg-primary text-white p-3 rounded-top">
        <h4 className="mb-0">India vs Pakistan</h4>
        <p className="mb-0">Live Commentary</p>
      </div>
      <div className="p-3">
        <h5 className="text-primary">Latest Updates</h5>
        <ul className="list-unstyled">
          <li className="p-2 border-bottom">
            <p className="mb-1">
              <strong>Over 23.3:</strong> <span className="text-success">FOUR!</span> Kohli drives beautifully through covers. Pure class!
            </p>
            <small className="text-muted">India 145/2</small>
          </li>
          <li className="p-2 border-bottom">
            <p className="mb-1">
              <strong>Over 22.5:</strong> <span className="text-danger">OUT!</span> Rohit Sharma tries to loft but gets caught at long-off. Haris Rauf strikes!
            </p>
            <small className="text-muted">India 139/2</small>
          </li>
          <li className="p-2 border-bottom">
            <p className="mb-1">
              <strong>Over 21.4:</strong> Another single for Kohli. Excellent rotation of strike.
            </p>
            <small className="text-muted">India 138/1</small>
          </li>
          <li className="p-2 border-bottom">
            <p className="mb-1">
              <strong>Over 20.2:</strong> <span className="text-success">SIX!</span> Rohit pulls one into the stands. Sheer power!
            </p>
            <small className="text-muted">India 130/1</small>
          </li>
        </ul>
      </div>
      <div className="text-center p-2 bg-light border-top rounded-bottom">
        <p className="text-muted mb-0">Stay tuned for more live updates.</p>
      </div>
    </div>
    
    );
  }
}

export default MatchCommentary;
