import styled from "styled-components";
import SelectTheme from "../SelectTheme";

// select style
const SelectItemHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-color: #92a8d1;
  border-width: 1px;
  border-style: solid;

  .ui-api-kit-select__header__text {
    background: transparent;
    border: none;
    outline: none;
    box-sizing: border-box;
    color: black;
    display: flex;
    justify-content: left;
    align-items: center;
    width: 84%;
    height: 75%;
    margin-left: 1%;
    padding-left: 10px;
  }

  .ui-api-kit-select__header__icon__ct {
    background: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 90%;
    margin-left: 1%;
    margin-right: 1%;
  }

  .ui-api-kit-select__header__icon {
    background: transparent;
    outline: none;
    border: none;
    width: 20px;
    height: 20px;
    opacity: 1;
    transform: ${props => (props.showOptions ? "rotate(180deg)" : "rotate(0deg)")};
  }

  .arrow-enter {
    opacity: 0.01;
    transform: rotate(0deg);
  }

  .arrow-enter-active {
    opacity: 1;
    transform: rotate(180deg);
    transition: all 200ms ease-in;
  }

  .arrow-exit {
    opacity: 1;
    transform: rotate(180deg);
  }

  .arrow-exit-active {
    opacity: 1;
    transform: rotate(0deg);
    transition: all 200ms ease-in;
  }
`;

export default SelectItemHeaderStyle;
