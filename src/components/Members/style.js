import styled from "styled-components";
import { Breakpoint } from "../../styles/theme";

export const StyledMembers = styled.div`
  display: flex;
  position: relative;
  padding: 60px 120px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .member-title {
    margin-bottom: 50px;
  }

  .member-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 40px;
    justify-content: center;
    align-items: center;
    align-self: center;
  }

  @media (max-width: ${Breakpoint.LARGE_TABLET}px) {
    padding: 60px;
  }

  @media (max-width: ${Breakpoint.TABLET}px) {
    padding: 40px;
    min-height: 40vh;

    .member-title {
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${Breakpoint.MOBILE}px) {
    padding: 20px;
  }
`;
