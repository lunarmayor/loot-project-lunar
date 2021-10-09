import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { ClientContext } from "graphql-hooks";

import theme from "./theme";
import { currentUser as currentUserAtom } from "./atoms";

import AuthWrapper from "./AuthWrapper";
import ChainWrapper from "./ChainWrapper";

const AppWrapper = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AuthWrapper>
          <ChainWrapper>{children}</ChainWrapper>
        </AuthWrapper>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default AppWrapper;
