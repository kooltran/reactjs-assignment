import styled from "styled-components";
import { COLORS } from "./variables";

export const StyledTripWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const StyledAppContainer = styled.div`
  text-align: center;
`;

export const StyledAppTitle = styled.div`
  position: relative;
  background: ${COLORS.GREEN};
  width: 100%;
  font-size: 24px;
  color: ${COLORS.WHITE};
  text-align: center;
  padding: 30px 0;
  text-transform: uppercase;
  margin-bottom: 15px;
`;
