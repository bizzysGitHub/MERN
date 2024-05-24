import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
function Header() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateeey = useSelector( (state) => state.auth)

const {user} = stateeey

const Logout = () =>{
  dispatch(logout());
  dispatch(reset());
  navigate('/')
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
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li></>)}
          
      </ul>
    </header>
  );
}

export default Header;
