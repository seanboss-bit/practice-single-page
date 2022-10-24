import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <div>
      <div className="container">
        <BackButtonSection>
          <Units className="dotted"></Units>
        </BackButtonSection>
        <ProfileContent>
          <img
            src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg"
            alt="#"
            id="profile_img"
          />
          {/* i do not have a twitter handle */}
          <p id="twitter">dwane johnson</p>
          <span id="slack">frontend slack</span>
        </ProfileContent>
      </div>
    </div>
  );
};

const BackButtonSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 15px;
`;
const Units = styled.div`
  &::after{
    font-family: "FontAwesome" !important;
    content:'\f01e' ;
  }
  @media screen and (max-width: 768px){
    &::after{
      content: '\f141';
    }
  }
`
const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    font-size: 20px;
    padding: 15px;
    text-transform: capitalize;
    font-weight: 600;
  }
  span {
    display: none;
  }
`;
export default Profile;
