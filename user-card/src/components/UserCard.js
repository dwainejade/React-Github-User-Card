import React from 'react';


function UserCard({ user }) {
    return (
        <div className="user-container">
            <div className="user-card">
                <img className="avatar" alt='avatar' src={user.avatar_url} />
                <div className="user-info">
                    <h3 className="name">{user.name}</h3>
                    <p>Location: {user.location}</p>
                    <span className="info">Followers: {user.followers} | </span>
                    <span className="info">Following: {user.following}</span>
                    <p className="info">Repos: {user.public_repos}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;