import styled from "styled-components";

// icon theme
import {
  defaultIconWidth,
  defaultIconHeight,
  defaultBackground,
  defaultIntent,
  disableOpacity,
  backgrounds,
  intents,
  iconWSizes,
  iconHSizes
} from "./IconTheme"; // prettier-ignore

const Icon = styled.div`
  color: transparent;
  background-color: transparent;
  border-color: transparent;
  margin: 0;
  padding: 0;
  outline: 0;
  border-style: none;
`;

/* eslint-disable */
// icon style
const IconStyle = styled(Icon)`
  .ui-api-kit-icon {
    overflow: hidden;
    width: ${props => (props.background ? iconWSizes[props.size] : defaultIconWidth)};
    height: ${props => (props.background ? iconHSizes[props.size] : defaultIconHeight)};
    background-color: ${props => (props.background ? backgrounds(props.theme)[props.background] : defaultBackground)};
    fill: ${props => (props.intent ? intents(props.theme)[props.intent] : defaultIntent)};
  }

  .ui-api-kit-icon--disabled{
    pointer-events: none;
    cursor: not-allowed;
    opacity: ${disableOpacity};
  } 
`;

export default IconStyle;
