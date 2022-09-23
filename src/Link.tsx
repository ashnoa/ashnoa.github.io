import React from 'react';
import './App.css';

type LinkProps = {
  title: string;
  url: string;
}

function Link(props: LinkProps) {
  return (
    <a
        className="App-link"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
    >
        {props.title}
    </a>
  );
}

export default Link;
