import styled from "styled-components";
import ButtonStyle from "../button/ButtonStyle";
import ButtonTheme from "../button/ButtonTheme";
import ButtonIconTheme from "./ButtonIconTheme";

// button settings
const {
  defaultBgColor,
  defaulTxtColor,
  backgrounds,
  textColors,
  btMaxWidth,
  defaultTxtMarginLeft,
  defaultTxtMarginRight
} = ButtonTheme; // prettier-ignore

// button icon settings
const {
  defaultIconWidth,
  defaultIconHeight,
  defaultIconMarginRight,
  defaultIconMarginLeft,
  defaultTxtWidth,
  defaultDirection,
  textMLLSizes,
  textMLRSizes,
  textMRLSizes,
  textMRRSizes,
  iconAligns,
  iconWSizes,
  iconHSizes,
  iconMRLSizes,
  iconMRRSizes,
  iconMLLSizes,
  iconMLRSizes,
  textWSizes
} = ButtonIconTheme;

/* eslint-disable */
// button icon style
// extends button style
const ButtonIconStyle = styled(ButtonStyle)`
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
    padding: 0;
    display: flex;
    align-items : center;
    flex-direction: ${props => (props.iconAlign ? iconAligns[props.iconAlign] : defaultDirection)};
  }

  .ui-api-kit-icon-button--icon{ 
    background-color: transparent;
    width: ${props => (props.bSize ? iconWSizes[props.bSize] : defaultIconWidth)};
    height: ${props => (props.bSize ? iconHSizes[props.bSize] : defaultIconHeight)};
    margin-left: ${props => ((props.bSize && props.iconAlign) ? (iconAligns[props.iconAlign] === defaultDirection ? iconMLLSizes[props.bSize] : iconMLRSizes[props.bSize]) : defaultIconMarginLeft)};
    margin-right: ${props => ((props.bSize && props.iconAlign) ? (iconAligns[props.iconAlign] === defaultDirection ? iconMRLSizes[props.bSize] : iconMRRSizes[props.bSize]) : defaultIconMarginRight)};
  } 

  .ui-api-kit-button--text{  
    text-align: left;
    background-color: transparent;
    max-width: ${props => (props.bSize ? textWSizes[props.bSize] : defaultTxtWidth)};
    margin-left: ${props => ((props.bSize && props.iconAlign) ? (iconAligns[props.iconAlign] === defaultDirection ? textMLLSizes[props.bSize] : textMLRSizes[props.bSize]) : defaultTxtMarginLeft)};
    margin-right: ${ props => ((props.bSize && props.iconAlign) ? (iconAligns[props.iconAlign] === defaultDirection ? textMRLSizes[props.bSize] : textMRRSizes[props.bSize]) : defaultTxtMarginRight)};
  }
`;

export default ButtonIconStyle;
