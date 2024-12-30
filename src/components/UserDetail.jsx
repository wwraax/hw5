import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../redux/reducer'; 

const UserDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [dispatch]);

  const user = users.find((user) => user.id === parseInt(id));

  if (loading) {
    return (
    <div class="lds-dual-ring"></div>
    );
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }


  return (
    <div>
      <h1>{user.name}</h1>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <p>website: {user.website}</p>
      <p>address: {user.address.street} - {user.address.city}</p>
    </div>
  );
};

export default UserDetail;
