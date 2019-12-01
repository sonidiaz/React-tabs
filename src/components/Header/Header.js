import React from "react";
import './Header.css';

const Header = ({ children = "dqwdqw" }) => {
  return (
    <header className="container is-fluid has-background-yellow">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-purple">{children}</h1>
          </div>
        </div>
      </section>
    </header>
  );
};
export { Header };
