import React from 'react';

import './SectionTitle.css';

function SectionTitle({ name }) {
  return (
    <>
      <p className="sectiontitle__title">
        <span className="sectiontitle__tag">&lt;</span>
        {name}
        <span className="sectiontitle__tag"> /&gt;</span>
      </p>
    </>
  );
}

export default SectionTitle;
