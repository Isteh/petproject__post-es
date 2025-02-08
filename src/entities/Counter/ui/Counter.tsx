import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';

const Counter: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  function increment() {
    dispatch(counterActions.increment());
  }
  function decrement() {
    dispatch(counterActions.decrement());
  }
  return (
    <div>
      <h2>{value}</h2>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};

export default Counter;
