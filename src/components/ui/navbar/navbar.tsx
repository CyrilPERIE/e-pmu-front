import { useEffect } from 'react';
import NavBarHeader from './header/header';
import NavBarBody from './body/body';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { fetchReunions } from '../../../redux/reunions/reunionsThunks';
import { selectSelectedDate } from '../../../redux/dates/datesSelectors';

const NavBar = () => {

  const dispatch = useDispatch<AppDispatch>();
  const selectedDate = useSelector(selectSelectedDate)
  
  useEffect(() => {
    dispatch(fetchReunions(selectedDate));
  }, [dispatch, selectedDate]);

  return (
    <div className="h-full flex flex-col">
        <NavBarHeader />
        <NavBarBody />
    </div>
  );
};

export default NavBar;
