"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const { data: session, status } = useSession();
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleUpload = async () => {
    if (!videoFile) {
      alert("Please select a video file");
      return;
    }

    if (!session?.accessToken) {
      alert("You need to be logged in to upload a video.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("accessToken", session.accessToken);
      formData.append("videoTitle", videoTitle);
      formData.append("videoDescription", videoDescription);
      formData.append("videoFile", videoFile);

      const response = await axios.post("/api/youtube-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(`Upload successful! Video ID: ${response.data.videoId}`);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert("Error uploading video. Please check the console for details.");
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Login with Google</button>
      ) : (
        <>
          <button onClick={() => signOut()}>Logout</button>
          <h1>Upload Video to YouTube</h1>
          <div>
            <input
              type="text"
              placeholder="Video Title"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Video Description"
              value={videoDescription}
              onChange={(e) => setVideoDescription(e.target.value)}
            />
          </div>
          <div>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
            />
          </div>
          <button onClick={handleUpload}>Upload Video</button>
        </>
      )}
    </div>
  );
}
