import styled from "styled-components";
import ButtonTheme from "./ButtonTheme";

const {
  shadow,
  shadowHover,
  defaultPadding,
  defaultRadius,
  defaultBorderWidth,
  defaultFontSize,
  defaultBgColor,
  defaulBorderColor,
  defaulTxtColor,
  defaultShape,
  defaultFStyle,
  defaultFWeight,
  defaultBSize,
  defaulTxtTransform,
  defaulTxtAlign,
  defaulColorType,
  disabledOpacity,
  transitionDuration,
  backgrounds,
  borders,
  shapes,
  fStyles,
  fWeights,
  bSizes,
  textColors,
  textTransforms,
  textAligns,
  btStyleTextBg,
  btStyleTextBorder,
  btStyleTextBgHover,
  btStyleTextBorderHover,
  btStyleTextOpacityHover,
  btMaxWidth,
  btMaxHeight,
  defaulTxtLigneHeight,
  defaulTxtMaxHeight
} = ButtonTheme;

const Button = styled.div`
  color: ${defaulTxtColor};
  border-color: ${defaulBorderColor};
  margin: 0;
  padding: 0;
  outline: 0;
  font-size: ${defaultFontSize};
  border-radius: ${defaultRadius};
  border-width: ${defaultBorderWidth};
  border-style: solid;
  transition-duration: ${transitionDuration};
`;

/* eslint-disable */
const ButtonStyle = styled(Button)`
  .ui-api-kit-button--bshape--${props => (props.shape ? props.shape : defaultShape)} {
    box-shadow: ${shadow};
    border-radius: ${props => (props.shape ? shapes[props.shape] : defaultRadius)};
  }

  .ui-api-kit-button--fstyle--${props => (props.fStyle ? props.fStyle : defaultFStyle)} {
    box-shadow: ${shadow};
    font-style: ${props => (props.fStyle ? fStyles[props.fStyle] : defaultFStyle)};
  }
  
  .ui-api-kit-button--fweight--${props => (props.fWeight ? props.fWeight : defaultFWeight)} {
    box-shadow: ${shadow};
    font-weight: ${props => (props.fWeight ? fWeights[props.fWeight] : defaultFWeight)};
  }

  .ui-api-kit-button--bsize--${props => (props.bSize ? props.bSize : defaultBSize)} {
    box-shadow: ${shadow};
    font-size: ${props => (props.bSize ? bSizes[props.bSize] : defaultBSize)};
  }

  .ui-api-kit-button--ttransform--${props => (props.tTransform ? props.tTransform : defaulTxtTransform)} {
    box-shadow: ${shadow};
    text-transform: ${props => (props.tTransform ? textTransforms[props.tTransform] : defaulTxtTransform)};
  }

  .ui-api-kit-button--talign--${props => (props.tAlign ? props.tAlign : defaulTxtAlign)} {
    box-shadow: ${shadow};
    text-align: ${props => (props.tAlign ? textAligns[props.tAlign] : defaulTxtAlign)};
    margin: auto;
  }

  .ui-api-kit-button--bcolor--${props => (props.intent ? props.intent : defaulColorType)} {
    box-shadow: ${shadow};
    color: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
    background-color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    border-color: ${props => (props.intent ? borders[props.intent] : defaulBorderColor)};
  }
  
  .ui-api-kit-button--bstyle--fill {
    box-shadow: ${shadow};
    color: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
    background-color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    border-color: ${props => (props.intent ? borders[props.intent] : defaulBorderColor)};
    transition-duration: inherit;
    outline: inherit;
  }

  .ui-api-kit-button--bstyle--text {
    box-shadow: none;
    color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    background-color: ${btStyleTextBg};
    border-color: ${btStyleTextBorder};
    transition-duration: inherit;
    outline: inherit; 
  }

  .ui-api-kit-button--bstyle--outline {
    box-shadow: ${shadow};
    background-color: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
    color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    border-color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    transition-duration: inherit;
    outline: inherit;  
  }

  .ui-api-kit-button--bstyle--fill:hover {
    box-shadow: ${shadow};
    background-color: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
    color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    border-color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
  }

  .ui-api-kit-button--bstyle--outline:hover {
    box-shadow: ${shadow};
    color: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
    background-color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    border-color: ${props => (props.intent ? borders[props.intent] : defaulBorderColor)};
  }

  .ui-api-kit-button--bstyle--text:hover {
    box-shadow: ${shadowHover};
    color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    background-color: ${btStyleTextBgHover};
    border-color: ${btStyleTextBorderHover};
    opacity : ${btStyleTextOpacityHover};
  }

  .ui-api-kit-button--disabled{
    pointer-events: none;
    cursor: not-allowed;
    opacity: ${disabledOpacity};
  } 

  .ui-api-kit-button{
    max-width: ${btMaxWidth};
    max-height: ${btMaxHeight};
    cursor: pointer;
    padding: 0;
  }

  .ui-api-kit-button--text{
    padding: ${defaultPadding};
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: ${defaulTxtLigneHeight};
    max-height: ${defaulTxtMaxHeight};
  }

  .ui-api-kit-button:active {
    border: 1px solid ${btStyleTextBorderHover};
  }
`;

export default ButtonStyle;

/* max-height = line-height (1.2) * lines max number (3) */