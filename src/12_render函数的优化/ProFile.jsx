import {memo} from 'react'
const ProFile = memo(function ProFile(props) {
  console.log('p render');
  
  return <h1>{props.msg}</h1>
})
export default ProFile