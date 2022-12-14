import { CONFIG_CONSTANT } from "../constants";
import { aboutUsReset } from "../initialData";

export const aboutUsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONFIG_CONSTANT.ABOUT_US_DESCRIPTION:
      return {
        ...state,
        noData: false,
        ABOUT_US: { ...state.ABOUT_US, description: payload },
      };
    case CONFIG_CONSTANT.ABOUT_US_TAG_ONE:
      return {
        ...state,
        noData: false,
        ABOUT_US: { ...state.ABOUT_US, tagData_one: payload },
      };
    case CONFIG_CONSTANT.ABOUT_US_TAG_TWO:
      return {
        ...state,
        noData: false,
        ABOUT_US: { ...state.ABOUT_US, tagData_two: payload },
      };

    case CONFIG_CONSTANT.ABOUT_US_TAG_THREE:
      return {
        ...state,
        noData: false,
        ABOUT_US: { ...state.ABOUT_US, tagData_three: payload },
      };

    case CONFIG_CONSTANT.ABOUT_US_TAG_FOUR:
      return {
        ...state,
        noData: false,
        ABOUT_US: { ...state.ABOUT_US, tagData_four: payload },
      };

    case CONFIG_CONSTANT.ABOUT_US_TAG_FIVE:
      return {
        ...state,
        noData: false,
        ABOUT_US: { ...state.ABOUT_US, tagData_five: payload },
      };
    case "RESET":
      return {
        ...aboutUsReset,
      };
  }
};
