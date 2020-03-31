import React from 'react';
import './UserCard.css';
import { User } from '../models/User';

interface Props {
  user: User
}

const UserCard: React.FC<Props> = (props) => {

  return (
    <div className="user-card">
      <img alt='avatar' src={ props.user.avatar_url } />
      <h3> { props.user.login } </h3>
    </div>
  );
}

export default UserCard;
