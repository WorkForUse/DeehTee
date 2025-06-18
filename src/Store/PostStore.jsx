import { useReducer, createContext, useCallback } from "react";

export const PsLST = createContext({
  postLST: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostLstReducer = (crrPostLST, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...crrPostLST];
    case "DELETE_POST":
      return crrPostLST.filter((post) => post.id !== action.payload.PostID);
    default:
      return crrPostLST;
  }
};

const PostStore = ({ children }) => {
  const [posTListing, dispatchPostListing] = useReducer(PostLstReducer, []);

  const addPost = (ImageURL, Title, postDate, Description) => {
    dispatchPostListing({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        ImGURL: ImageURL,
        Ttl: Title,
        Date: postDate,
        Dsc: Description,
      },
    });
  };

  const deletePost = useCallback((PostID) => {
    dispatchPostListing({
      type: "DELETE_POST",
      payload: {
        PostID,
      },
    });
  }, []);

  return (
    <PsLST.Provider value={{ postLST: posTListing, addPost, deletePost }}>
      {children}
    </PsLST.Provider>
  );
};

export default PostStore;