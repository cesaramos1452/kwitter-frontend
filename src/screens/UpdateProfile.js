import React from "react";
import { MenuContainer } from "../components";
import { UserProfileUpdateFormContainer } from "../components";

import { Grommet, Main, Anchor } from "grommet";
import { grommet } from "grommet/themes";

export const UpdateProfileScreen = (props) => {
  const { username } = props.match.params;

  return (
    <Grommet theme={grommet}>
      <MenuContainer />
      <Main margin="medium" pad="small">
        <h3>Update My Profile</h3>
        <UserProfileUpdateFormContainer profile={username} />
      </Main>
    </Grommet>
  );
};
