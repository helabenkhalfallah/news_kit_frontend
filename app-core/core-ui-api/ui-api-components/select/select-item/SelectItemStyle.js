import styled from "styled-components";

// select item global style
const SelectItemStyle = styled.div`
  .ui-api-kit-select {
    background: transparent;
    position: relative;
    display: block;
    width: 220px;
    height: 40px;
    margin: 0;
    padding: 0;
  }

  .ui-api-kit-select__list {
    background: transparent;
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
  }

  .ui-api-kit-select__header {
    background: transparent;
    width: 220px;
    height: 40px;
    margin: 0;
    padding: 0;
  }

  .select-list-enter {
    max-height: 0;
    opacity: 0.2;
    transition: all 0.2s ease-in;
  }

  .select-list-enter-active {
    opacity: 1;
    max-height: 100px;
  }

  .select-list-exit {
    opacity: 0.2;
    max-height: 100px;
    transition: all 0.2s ease-out;
  }

  .select-list-exit-active {
    opacity: 1;
    max-height: 0;
  }
`;

export default SelectItemStyle;
