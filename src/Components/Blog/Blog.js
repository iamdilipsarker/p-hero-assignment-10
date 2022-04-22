import React from 'react';
import "./Blog.css"
const Blog = () => {
    return (
      <div className="blog">
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
        <h3>
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Answer: We use firebase because, Firebase Authentication provides
          backend services, easy-to-use SDKs, and ready-made UI libraries to
          authenticate users to your app. It supports authentication using
          passwords, phone numbers, popular federated identity providers like
          Google, Facebook and Twitter, and more. Firebase Authentication
          integrates tightly with other Firebase services, and it leverages
          industry standards like OAuth 2.0 and OpenID Connect, so it can be
          easily integrated with your custom backend.
        </p>
        <p>
          Other option we have to implements authentication: We can use Octa,
          OAuth, Heroku,Parse,Back4App etc.{" "}
        </p>

        <h3>
          3. What other services does firebase provide other than authentication?
        </h3>
        <p>
          Answer: Firebase is originally developed by Firebase inc and later
          acquired by Google. It provides different kinds of services that help
          you to develop high-quality mobile and web applications to grow your
          business. It is compatible with Web, iOS, Android, and OS X clients.
          With Firebase, developers don't need to worry about the backend
          programming, Authentication, API development, database (real-time
          cloud-hosted NoSQL database and cloud firestore), File storage, etc.
          Firebase provides all the services with very efficient and fast
          performance.
          <p>
            There are many services which Firebase provides, Most useful of them
            are: Cloud Firestore, Cloud Functions, Authentication, Hosting,
            Cloud Storage, Google Analytics, Predictions, Cloud Messaging,
            Dynamic Links, Remote Config.
          </p>
        </p>
      </div>
    );
};

export default Blog;