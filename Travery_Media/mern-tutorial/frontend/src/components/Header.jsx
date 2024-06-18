import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
// import { useEffect } from 'react';
function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user, isError} = useSelector( (state) => state.auth)




const Logout = () =>{
  dispatch(logout());
  dispatch(reset());
  navigate('/')
};


const checkErrorAndUser = () => {
  if(!user && isError === true){
      dispatch(reset())
    }
}

  return (
    <header className="header ">
      <div className="logo">
        <Link to="/"> GoalSetter</Link>
      </div>
      <ul>
        {user ? (<button className='btn' onClick={Logout}>
          <FaSignOutAlt/>Logout
        </button>): (<> <li>
          <Link to="/login" onClick={checkErrorAndUser}>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={checkErrorAndUser}>
            <FaUser /> Register
          </Link>
        </li></>)}
          
      </ul>
    </header>
  );
}

export default Header;
