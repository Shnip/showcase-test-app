import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__inner loader__one"></div>
      <div className="loader__inner loader__two"></div>
      <div className="loader__inner loader__three"></div>
    </div>
  )
}

export default Loader;