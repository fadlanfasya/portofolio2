import React from "react";

const Aside = React.forwardRef((props, ref) => {
  return (
    <aside ref={ref} className={props.class}>
      <div className="aside-content">
        <ol>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ol>
      </div>
    </aside>
  );
});

export default Aside;
