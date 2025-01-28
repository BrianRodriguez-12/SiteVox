import React from 'react';
import { FaSpinner } from 'react-icons/fa';

// Styles
import './styles.css';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <FaSpinner className="spinner" />
      <p>Loading...</p>
    </div>
  );
};
export default Loading;
