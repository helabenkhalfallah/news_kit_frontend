import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List } from "react-virtualized";

// import cx from "classnames";
// import SelectOptions from "./SelectOptions";
import SelectItemListStyle from "./SelectItemListStyle";
import SelectItemOption from "../select-option/SelectItemOption";

/**
 * Select Item List Class
 */
class SelectItemList extends PureComponent {
  // propType validation
  static propTypes = {
    theme: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    filter: PropTypes.string,
    onChange: PropTypes.func
  };

  // propType default values
  static defaultProps = {
    filter: "",
    onChange: null
  };

  // component life cycle
  // eslint-disable-next-line prettier/prettier
  componentWillMount() { }

  // row render
  rowRenderer = ({ index, isScrolling, isVisible, key, parent, style }) => {
    const { theme, options } = this.props;
    return (
      <div key={key} style={style}>
        <SelectItemOption theme={theme} option={options[index]} />
      </div>
    );
  };

  // list render
  render() {
    const { theme, options } = this.props;
    return (
      <SelectItemListStyle theme={theme}>
        <List
          width={300}
          height={200}
          rowHeight={20}
          rowCount={options.length}
          rowRenderer={this.rowRenderer}
        />
      </SelectItemListStyle>
    );
  }
}

export default SelectItemList;
