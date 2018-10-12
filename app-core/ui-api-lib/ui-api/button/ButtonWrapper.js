import styled from "styled-components";

const Button = styled.div`
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-size: 2em;
  border-color: #ffffff;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  outline: 0;
`;

const ButtonWrapper = styled(Button)`
  .news-kit-button--default {
    background: #ffffff;
    border-color: #a569bd;
    color: #a569bd;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--default:hover {
    background-color: #a569bd;
    color: #ffffff;
  }

  .news-kit-button--outline {
    background: #ffffff;
    border-color: #e6512f;
    color: #e6512f;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--outline:hover {
    background-color: #e6512f;
    color: #ffffff;
  }

  .news-kit-button--primary {
    background: #ffffff;
    border-color: #00a7cf;
    color: #00a7cf;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--primary:hover {
    background-color: #00a7cf;
    color: #ffffff;
  }

  .news-kit-button--secondary {
    background-color: #ffffff;
    border-color: #ff0080;
    color: #ff0080;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--secondary:hover {
    background-color: #ff0080;
    color: #ffffff;
  }

  .news-kit-button--success {
    background-color: #ffffff;
    border-color: #1cce0c;
    color: #1cce0c;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--success:hover {
    background-color: #1cce0c;
    color: #ffffff;
  }

  .news-kit-button--danger {
    background-color: #ffffff;
    border-color: #ff5a34;
    color: #ff5a34;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--danger:hover {
    background-color: #ff5a34;
    color: #ffffff;
  }

  .news-kit-button--warning {
    background-color: #ffffff;
    border-color: #ff9900;
    color: #ff9900;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--warning:hover {
    background-color: #ff9900;
    color: #ffffff;
  }

  .news-kit-button--info {
    background-color: #ffffff;
    border-color: #2196f3;
    color: #2196f3;
    padding: 15px 15px 15px 15px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--info:hover {
    background-color: #2196f3;
    color: #ffffff;
  }

  .news-kit-button--lg {
    padding: 20px 20px 20px 20px;
  }

  .news-kit-button--sm {
    padding: 10px 10px 10px 10px;
  }

  .news-kit-button--xs {
    padding: 5px 5px 5px 5px;
  }
`;

export default ButtonWrapper;
