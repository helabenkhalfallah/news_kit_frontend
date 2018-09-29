import styled from 'styled-components'

const Button = styled.div`
  color : #FFFFFF;
  margin: 0;
  padding : 0;
  font-size: 2em;
  border-color : #FFFFFF;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  outline: 0;
`


const ButtonWrapper = styled(Button)`

  .news-kit-button--default{ 
    background : #FFFFFF; 
    border-color : #A569BD;
    color : #A569BD;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--default:hover {
    background-color: #A569BD;
    color: #FFFFFF;
  }

  .news-kit-button--outline{
    background : #FFFFFF;
    border-color : #e6512f;
    color : #e6512f;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--outline:hover {
    background-color: #e6512f;
    color: #FFFFFF;
  }

  .news-kit-button--primary{
    background : #FFFFFF;
    border-color : #00a7cf;
    color : #00a7cf;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--primary:hover {
    background-color: #00a7cf;
    color: #FFFFFF;
  }

  .news-kit-button--secondary{
    background-color:#FFFFFF;
    border-color : #ff0080;
    color : #ff0080;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--secondary:hover {
    background-color: #ff0080;
    color: #FFFFFF;
  }

  .news-kit-button--success{
    background-color:#FFFFFF;
    border-color : #1cce0c;
    color : #1cce0c;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--success:hover {
    background-color: #1cce0c;
    color: #FFFFFF;
  }

  .news-kit-button--danger{
    background-color:#FFFFFF;
    border-color : #ff5a34;
    color : #ff5a34;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }
  
  .news-kit-button--danger:hover {
    background-color: #ff5a34;
    color: #FFFFFF;
  }

  .news-kit-button--warning{
    background-color:#FFFFFF;
    border-color : #ff9900;
    color : #ff9900;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--warning:hover {
    background-color: #ff9900;
    color: #FFFFFF;
  }

  .news-kit-button--info{
    background-color:#FFFFFF;
    border-color : #2196F3;
    color : #2196F3;
    padding : 10px 10px 10px 10px;
    border-radius: inherit;
    border-width: inherit;
    border-style: inherit;
    outline: inherit;
  }

  .news-kit-button--info:hover {
    background-color: #2196F3;
    color: #FFFFFF;
  }

  .news-kit-button--lg{
    padding : 20px 20px 20px 20px;
  }

  .news-kit-button--sm {
    padding : 10px 10px 10px 10px;
  }

  .news-kit-button--xs { 
    padding : 5px 5px 5px 5px;
  }
`

export default ButtonWrapper
