import React from "react";
import './Styles/pageStyles.css';

function Page({ children }) {
  return <section className='page'>{children}</section>;
}
export default Page;