import styled from "styled-components";
import ButtonTheme from "../button/ButtonTheme";
import ButtonStyle from "../button/ButtonStyle";
import ButtonIconTheme from "./ButtonIconTheme";

// button settings
const {
  defaultBgColor,
  defaulTxtColor,
  backgrounds,
  textColors,
  defaulTxtLigneHeight,
  defaulTxtMaxHeight,
  btMaxWidth
} = ButtonTheme; // prettier-ignore

// button icon settings
const {
  defaultIconWidth,
  defaultIconHeight,
  defaultIconMarginLeft,
  defaultTxtWidth,
  defaultTxtMarginTop,
  defaultTxtMarginBottom,
  defaultTxtMarginLeft,
  defaultTxtMarginRight,
  iconWSizes,
  iconHSizes,
  textWSizes,
  textMLSizes,
  textMRSizes
} = ButtonIconTheme;

/* eslint-disable */
// button icon style
// extends button style
const ButtonIconStyle = styled(ButtonStyle)`
  
  .ui-api-kit-button--talign--${props => (props.tAlign ? props.tAlign : defaulTxtAlign)} {
    text-align: left; 
  }

  .ui-api-kit-button--bstyle--fill {
    fill: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
  }

  .ui-api-kit-button--bstyle--text {
    fill: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
  }

  .ui-api-kit-button--bstyle--outline {
    fill: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
  }

  .ui-api-kit-button--bstyle--fill:hover {
    fill: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
  }

  .ui-api-kit-button--bstyle--outline:hover {
    fill: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
  }

  .ui-api-kit-button--bstyle--text:hover {
    fill: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
  }
  
  .ui-api-kit-icon-button--content{
    background-color: transparent;
    max-width: ${btMaxWidth};
    display: flex;
    align-items : center;
    flex-direction: row;
    padding: 0;
  }

  .ui-api-kit-icon-button--icon{ 
    width: ${props => (props.bSize ? iconWSizes[props.bSize] : defaultIconWidth)};
    height: ${props => (props.bSize ? iconHSizes[props.bSize] : defaultIconHeight)};
    background-color: transparent;
    margin-left: ${defaultIconMarginLeft};
  } 

  .ui-api-kit-icon-button--text{ 
    background-color: transparent;
    max-width: ${props => (props.bSize ? textWSizes[props.bSize] : defaultTxtWidth)};
    margin-left: ${props => (props.bSize ? textMLSizes[props.bSize] : defaultTxtMarginLeft)};
    margin-right: ${props => (props.bSize ? textMRSizes[props.bSize] : defaultTxtMarginRight)};
    margin-top: ${defaultTxtMarginTop};
    margin-bottom: ${defaultTxtMarginBottom}; 
    line-height: ${defaulTxtLigneHeight};
    max-height: ${defaulTxtMaxHeight};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default ButtonIconStyle;
