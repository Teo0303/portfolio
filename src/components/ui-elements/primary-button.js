import React from "react";

export default (props) => (
  <button className='px-12 py-3 hover:bg-primary text-white rounded-full shadow-primary hover:shadow-primaryHover bg-primary-dark'>
    {props.children}
  </button>
);
