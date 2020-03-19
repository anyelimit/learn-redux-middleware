import React from "react";

const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  return (
    //loadingPost, loadingUsers true/false 값 가져오는 거 잘 안됐음..
    <div>
      <section>
        <h1>Post</h1>
        {post ? (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        ) : (
          "loading..."
        )}
      </section>
      <hr />
      <section>
        <h1>Users List</h1>
        {users ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.username} : {user.email}
              </li>
            ))}
          </ul>
        ) : (
          "loading2..."
        )}
      </section>
    </div>
  );
};

export default Sample;
