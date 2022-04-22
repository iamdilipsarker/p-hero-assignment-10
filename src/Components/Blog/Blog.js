import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
      <div className='blog'>
        <h3>1. Difference between authorization and authentication?</h3>
        <p>
          Answer:{" "}
          <p>
            1. Authentication confirms users identity to grant access to the
            system. On the other hand, Authorization determines whether users
            are authorized to access the resources.
          </p>
          <p>
            2. Authentication is the process of validating user credentials to
            gain user access. On the other hand, Authorization is the process of
            verifying whether access is allowed or not.
          </p>
          <p>
            3. Authentication is the process of verifying whether access is
            allowed or not. On the other hand, Authorization determines what
            user can and cannot access.
          </p>
          <p>
            4. Authentication usually requires a username and a password. On the
            other hand, Authentication factors required for authorization may
            vary, depending on the security level.
          </p>
          <p>
            5. Authentication is the first step of authorization so always comes
            first. On the other hand, Authorization is done after successful
            authentication.
          </p>
        </p>
      </div>
    );
};

export default Blog;