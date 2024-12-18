import React from "react";

export function Header() {
  const aStyle = {
    display: "inline-block",
    color: "blue",
    margine: "7px",
    textdecoration: "none"
  };
  return (
    <div style={{ backgroundColor: "#ccc" }}>
      <a style={aStyle} href="/home">Home</a> |&nbsp;
      <a style={aStyle} href="/about">About</a> |&nbsp;
      <a style={aStyle} href="/contact">Contact</a> |&nbsp;
    </div>
  );
}

export function Content() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Home <br />React and React Native</h2>
      <br /><br /><br />
      <p>Home content</p>
    </div>
  );
}

export const Footer = () => {
  return (
    <div style={{ textAlign: "center" }}>
      &copy; {new Date().getFullYear()} All rights reserved
    </div>
  );
}