import { useContext, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PsLST } from "../Store/PostStore";
import './Homepage.css';

const Homepage = () => {
  const { postLST, addPost, deletePost } = useContext(PsLST);

  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const toggleForm = () => setShowForm(!showForm);

  const handleSubmit = () => {
    if (!image || !title || !date || !desc) {
      alert("Please fill in all fields");
      return;
    }

    addPost(image, title, date, desc);

    setImage("");
    setTitle("");
    setDate("");
    setDesc("");
    setShowForm(false);
  };

  return (
    <div className="p-5 homepage-wrapper" style={{ marginLeft: "350px", marginTop: "30px" }}>
      <div className="relative inline-block text-left mb-5">
        <button
          onClick={toggleForm}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 hover:bg-gray-50"
        >
          {showForm ? "Hide Post Form" : "Create Post"}
        </button>
      </div>

      {showForm && (
        <div
          className="bg-[#1b1a1f] text-white p-6 rounded-lg max-w-3xl mx-auto shadow-lg"
          style={{ marginLeft: "-25px" }}
        >
          <h1 className="FS_title">Create New Post</h1>
          <form className="FC_style" onSubmit={(e) => e.preventDefault()}>
            <div className="image&title_data flex gap-4 flex-wrap">
              <div className="flex-1">
                <label>Image URL</label>
                <input
                  type="text"
                  placeholder="Enter image link..."
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label>Post Title</label>
                <input
                  type="text"
                  placeholder="Enter post title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="body_data flex gap-4 flex-wrap">
              <div className="flex-1">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label>Post Description</label>
                <textarea
                  placeholder="Write your post here..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>

            <button type="button" onClick={handleSubmit}>
              Submit Post <IoIosArrowRoundForward />
            </button>
          </form>
        </div>
      )}

      <div className="mt-10 grid gap-5">
        {postLST.length === 0 ? (
          <p className="text-white">No posts yet</p>
        ) : (
          postLST.map((post) => (
            <div
              key={post.id}
              className="bg-[#2b2a30] text-white rounded-lg p-5 shadow-md flex flex-col gap-3"
            >
              <img
                src={post.ImGURL}
                alt={post.Ttl}
                className="rounded-md w-full max-h-60 object-cover"
              />
              <h2 className="text-2xl font-bold">{post.Ttl}</h2>
              <p className="text-sm text-gray-400">{post.Date}</p>
              <p>{post.Dsc}</p>
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md w-fit"
              >
                Delete Post
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;