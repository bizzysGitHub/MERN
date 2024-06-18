// 1. if no user is logged in dont show goals.. show default page
import { useDispatch, useSelector } from 'react-redux';
import { GoalList } from '../components/goals/GoalsList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllGoals, reset } from '../features/goals/goalSlice';
import GoalForm from '../components/goals/GoalForm';

// const goalList = (userGoals) => {
//   return userGoals.map((uGoal, i) => (
//     <div key={i}>
//       <GoalsContainer Goals={uGoal} />
//     </div>
//   ));
// };

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { goals } = useSelector((state) => state.goals);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    dispatch(getAllGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch]);

  return (
    <>
     <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
          <GoalForm/>
          <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {GoalList(goals)}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
        </>
      );
    }

export default Dashboard;
