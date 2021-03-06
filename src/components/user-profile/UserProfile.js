import React, { useEffect } from "react";
import BlankProfile from "../images/blank-profile.png";
import { Grommet, Main, } from "grommet";
import { grommet } from "grommet/themes";
import "./UserProfile.css";

export const UserProfile = (props) => {
  useEffect(() => {
    props.getUser(props.profile);
  }, [props.profile]);
  return (
    <Grommet theme={grommet}>
      <Main margin="medium" pad="small">
        {props.users !== undefined && (
          <div className="userProfile">
            <div>
              <img
                className="ProfileImg"
                src={
                  props.users.pictureLocation !== null
                    ? "https://kwitter-api.herokuapp.com" +
                      props.users.pictureLocation
                    : BlankProfile
                }
                alt="profile-picture"
              />
            </div>
            <div>
              <h3>{props.users.displayName}</h3>
              <p>{props.users.username}</p>
              <p><strong>About Me:</strong> {props.users.about}</p>
              <p><strong>Last Updated:</strong> {props.users.updatedAt}</p>
              <p><strong>Candy Journy Started:</strong> {props.users.createdAt}</p>
            </div>
          </div>
        )}
      </Main>
    </Grommet>
  );
};
