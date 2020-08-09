import React from 'react';


function Followers({followers}){
    return(
        <div className="followers-container">
            {followers.map(follower => (
                <div key={follower.id} className="follower-card">
                    <img src={follower.avatar_url} alt={follower.name} />
                    <h3 className="name">{follower.login}</h3>
                </div>
            )
            )}
        </div>
    )
}

export default Followers;