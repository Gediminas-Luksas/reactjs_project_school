import React from 'react';

function Home({news}) {
  return (
    <div className="content">
      {news.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item.title}</h1>
            <p>{item.texts}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
