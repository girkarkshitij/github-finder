import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='User Avatar'
        className='round-img'
        style={{ width: '50px' }}
      />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          target='_blank'
          rel='noreferrer'
          className='btn btn-dark btn-sm my-1'
        >
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
