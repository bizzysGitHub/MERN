/* eslint-disable react/prop-types */

import { deleteGoal, editGoal } from '../../features/goals/goalSlice';
import { useDispatch } from 'react-redux';
import { FaWindowClose, FaPencilAlt } from 'react-icons/fa';
import { useState, useRef } from 'react';

export const GoalsContainer = ({ Goals }) => {
  const dispatch = useDispatch();
  const { _id, text } = Goals;

  const [eGoal, SetEgoal] = useState(false);
  const [changedGoal, SetChangedGoal] = useState(text);

  const inputRef = useRef(null);

  const handleChange = () => {
    SetEgoal(!eGoal); 
    inputRef.current.focus();
  };

  const SubmitEditedGoal = (e, id) => {
    e.preventDefault();
    dispatch(editGoal({ id, text: changedGoal }));
    SetEgoal(!eGoal);
  };

  return (
    <section
      className={
        (eGoal
          ? 'border-blue-700 '
          : 'grid grid-cols-[1fr_3fr_1fr] gap-2 border-blue-700') +
        ' border-2 rounded-lg  min-h-2 shadow-xl h-16 overflow-auto justify-items-center place-content-around place-items-center w-full'
      }
      key={_id}
    >
      {eGoal ? (
        <>
          <form onSubmit={() => SubmitEditedGoal(event, _id)}>
            <input
              className="w-full text-center focus:outline-none focus:border-transparent"
              ref={inputRef}
              type="text"
              name="text"
              id={_id}
              value={changedGoal}
              onChange={(e) => SetChangedGoal(e.target.value)}
            />
          </form>
          {/* <FaUserCheck /> */}
        </>
      ) : (
        <>
          <div
            className="close"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(deleteGoal(_id))}
          >
            <FaWindowClose />
          </div>
          <div className="title">{text}</div>
          <div
            className="edit"
            style={{ cursor: 'pointer' }}
            onClick={handleChange}
          >
            <FaPencilAlt />
          </div>
        </>
      )}
    </section>
  );
};
