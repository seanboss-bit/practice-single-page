import React from "react";
import styled from "styled-components";

const Link = ({ item, name, identity }) => {
  return (
    <div>
      <div className="container">
        <LinkToTag href={item} target="_blank" id={identity}>
          {name}
        </LinkToTag>
      </div>
    </div>
  );
};
const LinkToTag = styled.a`
  width: 100% !important;
  background-color: #eaecf0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-decoration: none;
  padding: 15px 0px;
  color: black;
  border-radius: 5px;
  font-weight: 600;
  margin: 15px 0px;
  &:hover {
    color: black;
  }
`;
export default Link;
