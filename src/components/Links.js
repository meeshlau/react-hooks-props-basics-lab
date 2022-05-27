import React from "react";
import user from "../data/user";

function Links(props) {
  return (
    <>
    <h3>Links</h3>
    <a href={props.github}></a>
    <a href={user.linkedin}></a>
    </>
  )
}

export default Links;