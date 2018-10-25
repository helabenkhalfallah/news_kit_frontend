import styled from "styled-components";
import ButtonTheme from "./ButtonTheme";

const {
  shadow,
  shadowHover,
  defaultRadius,
  defaultBorderWidth,
  defaultFontSize,
  defaultBgColor,
  defaulBorderColor,
  defaulTxtColor,
  defaultFStyle,
  defaultFWeight,
  defaultBSize,
  defaulTxtTransform,
  defaulTxtAlign,
  defaultTxtMarginLeft,
  defaultTxtMarginRight,
  defaultTxtMarginTop,
  defaultTxtMarginBottom,
  defaultTxtPaddingTop,
  defaultTxtPaddingBottom,
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
  textLineHeightSizes,
  textMaxHeightSizes,
  textMLSizes,
  textMRSizes,
  textMTSizes,
  textMBSizes,
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
  .ui-api-kit-button {
    cursor: pointer;
    padding: 0;
    margin: auto;
    transition-duration: inherit;
    outline: inherit;
    max-width: ${btMaxWidth};
    max-height: ${btMaxHeight};
    border-radius: ${props => (props.shape ? shapes[props.shape] : defaultRadius)};
    font-style: ${props => (props.fStyle ? fStyles[props.fStyle] : defaultFStyle)};
    font-weight: ${props => (props.fWeight ? fWeights[props.fWeight] : defaultFWeight)};
    font-size: ${props => (props.bSize ? bSizes[props.bSize] : defaultBSize)};
    text-transform: ${props => (props.tTransform ? textTransforms[props.tTransform] : defaulTxtTransform)};
    text-align: ${props => (props.tAlign ? textAligns[props.tAlign] : defaulTxtAlign)}; 
  }

  .ui-api-kit-button--bstyle--fill {
    box-shadow: ${shadow};
    color: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
    background-color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    border-color: ${props => (props.intent ? borders[props.intent] : defaulBorderColor)};
  }

  .ui-api-kit-button--bstyle--outline {
    box-shadow: ${shadow};
    background-color: ${props => (props.intent ? textColors[props.intent] : defaulTxtColor)};
    color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    border-color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
  }

  .ui-api-kit-button--bstyle--text {
    box-shadow: none;
    color: ${props => (props.intent ? backgrounds[props.intent] : defaultBgColor)};
    background-color: ${btStyleTextBg};
    border-color: ${btStyleTextBorder};
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
    opacity: ${btStyleTextOpacityHover};
  }

  .ui-api-kit-button--text {
    background-color: transparent;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: ${props => (props.bSize ? textMLSizes[props.bSize] : defaultTxtMarginLeft)};
    margin-right: ${props => (props.bSize ? textMRSizes[props.bSize] : defaultTxtMarginRight)};
    margin-top: ${props => (props.bSize ? textMTSizes[props.bSize] : defaultTxtMarginTop)};
    margin-bottom: ${props => (props.bSize ? textMBSizes[props.bSize] : defaultTxtMarginBottom)}; 
    line-height: ${props => (props.bSize ? textLineHeightSizes[props.bSize] : defaulTxtLigneHeight)};
    max-height: ${props => (props.bSize ? textMaxHeightSizes[props.bSize] : defaulTxtMaxHeight)};
    padding-top: ${defaultTxtPaddingTop};
    padding-bottom: ${defaultTxtPaddingBottom};
  }

  .ui-api-kit-button--disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: ${disabledOpacity};
  }

  .ui-api-kit-button:active {
    border: 1px solid ${btStyleTextBorderHover};
  }
`;

export default ButtonStyle;

/* max-height = line-height (1.2) * lines max number (3) */