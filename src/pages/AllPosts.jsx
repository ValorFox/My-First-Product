import React, { useEffect, useState } from "react";
import { Container, Postcard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [userID, setUserID] = useState(null);

  const userProfile = useSelector((state) => state.authSlice.userData);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });

    if (userProfile) {
      setUserID(userProfile.$id);
    }
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <h1>No posts</h1>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="w-full py-7">
        <Container>
          <div className="flex flex-wrap ">
            {posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <div className={ userID === post.userid ?"m-1 h-[1%] bg-teal-500":"m-1 h-[1%] bg-red-500"}></div>
                <Postcard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default AllPosts;
{
  /* <Container>
          {posts.map((post) => {
            <div className="p-2 w-1/4 bg-teal-400" key={post.$id}>
              <Postcard {...post} />
            </div>;
          })}
        </Container> */
}
