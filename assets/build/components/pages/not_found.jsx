import React from 'react';

export default function NotFound(props) {
  return (
    <div>
      <section className="content-header">
        <h1>
          Not Found
          <small>{props.location.pathname}</small>
        </h1>
      </section>

      <section className="content container-fluid">
        <p>Sorry, was not able to find what you were looking for</p>
      </section>
    </div>
  );
}
