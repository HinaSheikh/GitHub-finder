import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

const User =(props) => {
    useEffect(() =>{
        props.getUser (props.match.params.login);
    }
    //eslint-disable-next-line 
    ,[]);
    
      const {
          name,
          avatar_url,
          location,
          bio,
          blog,
          login, 
          html_url,
          followers,
          following,
          public_repos ,
          public_gist,
          hireable,
         
      } = props.user;

    return (
        <React.Fragment>
            <Link to='/' className="btn btn-light">Back to Search</Link>
            Hireable: {''}
            {hireable ?<i className = "fas fa-check text-succes"></i> :
            <i className = " fas fa-times-circle fas fa-check text-danger"></i>}
           <div className= "card grid-2">
               <div className="all-center">
               <img src ={avatar_url} className="round-img" alt="" style={{width:'150px'}}/>  
            <h3>{name}</h3>
           <p>Location : {location}</p></div>
           <div>
           {bio && (<React.Fragment><h1>Bio</h1> 
               <p>{bio}</p></React.Fragment>)}
               <a href={html_url} className='btn btn-dark my-1'>Visit my Profile</a>
               <ul>
                   <li>
                       {login && <React.Fragment>
                       <strong>Username:</strong>{login}</React.Fragment>}
                   </li>
                   <li>
                       {blog && <React.Fragment>
                       <strong>Website:</strong>{blog}</React.Fragment>}
                   </li>
               </ul>
           </div>
           </div>  
           <div className="card text-center">
               <div className="badge badge-primary">Followers:{followers}</div>
               <div className="badge badge-success">Following:{following}</div>
               <div className="badge badge-danger">Public Repositories:{public_repos}</div>
               <div className="badge badge-dark">Public Gist:{public_gist}</div>
           </div>
        </React.Fragment>
      
    )
}


export default User
