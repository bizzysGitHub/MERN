/* eslint-disable react/prop-types */

// import { useEffect } from 'react';


import { GoalsContainer} from './GoalsContainer'

export const GoalList = (userGoals) => {

  return userGoals.map((uGoal, i) => (
    <div key={i}>
      <GoalsContainer Goals={uGoal} />
    </div>
  ));
};

