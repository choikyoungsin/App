import React from 'react';

const UserList = ({users}) => {
    return (
        <div>
            {users.map((user) => {
                return(
                    
                    <div className="container">
                        <div className="card" key={user.id}>
                            <div className="card-body">
                                {user.name}
                            </div>
                        </div>
                    </div >
                );
            })}
        </div>
    );
};

export default UserList;