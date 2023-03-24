import React from "react";

const Section = ({ children, className, style }) => {
  return (
    <section data-scroll-section className={className} style={style}>
      {children}
    </section>
  );
};

export default Section;
