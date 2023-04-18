import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import MockYoutube from "../api/mockyoutube";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new MockYoutube();
    return youtube.search(keyword);
  });

  return (
    <>
      <div className="">aa</div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>Something is wrong </p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <li key={video.id}>{video.snippet.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
