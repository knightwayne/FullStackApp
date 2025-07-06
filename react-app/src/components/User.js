import React from 'react';
import {useNavigate, useParams, useLocation} from 'react-router-dom';

//not a class, because navigate is a react hook, and cant use hooks with class component
export function User(props)
{
  const navigate = useNavigate();
  const location = useLocation();
  
  const onNavigateHome = ()=>{
    navigate('/')
  }

  const {id} = useParams();
  console.log("User id param:", id);
  if(parseInt(id)===0)
  return(<h2>Wow! You entered Id as 0!</h2>)
  const query = new URLSearchParams(location.search);
  const name = query.get('name')
  console.log("name:", name)
  let cond = name !== undefined && name !== null;
  return(
      <>
          <h3>This is the User page</h3>
          The current User id is: {id}
          { cond ? <p>The name provided with query parameter is: {name}</p> : <p></p> }
          <hr />
          {console.log("User component rendered")}
          <button className='btn btn-primary' onClick={onNavigateHome}>Go Home</button>
      </>
  )  
}
