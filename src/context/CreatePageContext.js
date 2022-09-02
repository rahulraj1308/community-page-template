import React, { createContext, useReducer, useContext } from "react";

import { headerReducer } from "./reducers/headerReducer";
import { heroReducer } from "./reducers/heroReducer";
import { highlightBoxReducer } from "./reducers/highlighTextBoxReducer";
import { aboutUsReducer } from "./reducers/aboutUsReducer";

import {
  configHeaderInitialState,
  configHeroInitialState,
  configHighlightBoxInitialState,
  configAboutUsInitialState,
} from "./initialData";
import { CONFIG_CONSTANT } from "./constants";

const CreatePageContext = createContext();

const CreatePageContextProvider = ({ children }) => {
  const [headerConfig, headerDispatch] = useReducer(
    headerReducer,
    configHeaderInitialState
  );

  const [heroConfig, heroDispatch] = useReducer(
    heroReducer,
    configHeroInitialState
  );

  const [highlightBoxConfig, highlightBoxDispatch] = useReducer(
    highlightBoxReducer,
    configHighlightBoxInitialState
  );

  const [aboutUsConfig, aboutUsDispatch] = useReducer(
    aboutUsReducer,
    configAboutUsInitialState
  );

  const value = {
    headerConfig,
    headerDispatch,
    heroConfig,
    heroDispatch,
    highlightBoxConfig,
    highlightBoxDispatch,
    aboutUsConfig,
    aboutUsDispatch,
  };
  return (
    <CreatePageContext.Provider value={value}>
      {children}
    </CreatePageContext.Provider>
  );
};

export default CreatePageContextProvider;

export const useCreatePageContext = () => {
  const {
    headerConfig,
    headerDispatch,
    heroConfig,
    heroDispatch,
    highlightBoxConfig,
    highlightBoxDispatch,
    aboutUsConfig,
    aboutUsDispatch,
  } = useContext(CreatePageContext);
  return {
    headerConfig,
    headerDispatch,
    heroConfig,
    heroDispatch,
    highlightBoxConfig,
    highlightBoxDispatch,
    aboutUsConfig,
    aboutUsDispatch,
    CONFIG_CONSTANT,
  };
};