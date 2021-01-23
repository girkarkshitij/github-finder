import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  render() {
    const { loading, user, repos } = this.props;

    const {
      name,
      avatar_url,
      location,
      company,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Link to='/' className='btn btn-light'>
            Back
          </Link>
          Hireable:{' '}
          {hireable ? (
            <i className='fas fa-check text-success' />
          ) : (
            <i className='fas fa-times-circle text-danger'></i>
          )}
          <div className='card grid-2'>
            <div className='all-center'>
              <img
                src={avatar_url}
                className='round-img'
                alt='Github User Avatar'
                style={{ width: '200px' }}
              />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                target='_blank'
                rel='noreferrer'
                className='btn btn-dark my-2'
              >
                Visit Github Profile
              </a>
              <ul>
                <li>
                  <strong>Username</strong>: {login}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className='card text-center'>
            <div className='badge badge-primary'>Followers: {followers}</div>
            <div className='badge badge-success'>Following: {following}</div>
            <div className='badge badge-danger'>
              Public Repos: {public_repos}
            </div>
            <div className='badge badge-success'>
              Public Gists: {public_gists}
            </div>
          </div>
          <Repos repos={repos} />
        </Fragment>
      );
    }
  }
}

export default User;
