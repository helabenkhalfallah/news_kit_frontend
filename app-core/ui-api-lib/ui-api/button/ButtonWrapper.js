import styled from "styled-components";
import ButtonTheme from "./ButtonTheme";

const {
  shadow,
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
  backgrounds,
  borders,
  shapes,
  fStyles,
  fWeights,
  bSizes,
  textColors,
  textTransforms,
  textAligns
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
`;

/* eslint-disable */
const ButtonWrapper = styled(Button)`
  .ui-api-kit-button--bshape--${props => (props.shape ? props.shape : defaultShape)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    border-radius: ${props => (props.shape ? shapes[props.shape] : defaultRadius)};
  }

  .ui-api-kit-button--fstyle--${props => (props.fStyle ? props.fStyle : defaultFStyle)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    font-style: ${props => (props.fStyle ? fStyles[props.fStyle] : defaultFStyle)};
  }
  
  .ui-api-kit-button--fweight--${props => (props.fWeight ? props.fWeight : defaultFWeight)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    font-weight: ${props => (props.fWeight ? fWeights[props.fWeight] : defaultFWeight)};
  }

  .ui-api-kit-button--bsize--${props => (props.bSize ? props.bSize : defaultBSize)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    font-size: ${props => (props.bSize ? bSizes[props.bSize] : defaultBSize)};
  }

  .ui-api-kit-button--ttransform--${props => (props.tTransform ? props.tTransform : defaulTxtTransform)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    text-transform: ${props => (props.tTransform ? textTransforms[props.tTransform] : defaulTxtTransform)};
  }

  .ui-api-kit-button--talign--${props => (props.tAlign ? props.tAlign : defaulTxtAlign)} {
    box-shadow: ${shadow};
    padding: ${defaultPadding};
    text-align: ${props => (props.tAlign ? textAligns[props.tAlign] : defaulTxtAlign)};
  }

  .ui-api-kit-button--bcolor--${props => (props.color ? props.color : defaulColorType)} {
    box-shadow: ${shadow};
    color: ${props => (props.color ? textColors[props.color] : defaulTxtColor)};
    background-color: ${props => (props.color ? backgrounds[props.color] : defaultBgColor)};
    border-color: ${props => (props.color ? borders[props.color] : defaulBorderColor)};
  }
  
  .ui-api-kit-button--bstyle--container {
    box-shadow: ${shadow};
    color: ${props => (props.color ? textColors[props.color] : defaulTxtColor)};
    background-color: ${props => (props.color ? backgrounds[props.color] : defaultBgColor)};
    border-color: ${props => (props.color ? borders[props.color] : defaulBorderColor)};
  }

  .ui-api-kit-button--bstyle--text {
    box-shadow: none;
    color: ${props => (props.color ? backgrounds[props.color] : defaultBgColor)};
    background-color: transparent;
    border-color: transparent;
  }

  .ui-api-kit-button--bstyle--outline {
    box-shadow: ${shadow};
    background-color: ${props => (props.color ? textColors[props.color] : defaulTxtColor)};
    color: ${props => (props.color ? backgrounds[props.color] : defaultBgColor)};
    border-color: ${props => (props.color ? backgrounds[props.color] : defaultBgColor)};
  }
`;

export default ButtonWrapper;
