import {memo} from 'react'
const ProFile = memo(function(props) {
  console.log('p render');
  
  return <h1>{props.msg}</h1>
})
export default ProFile