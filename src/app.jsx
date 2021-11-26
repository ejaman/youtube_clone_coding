import { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";

function App() {
  const [videos, setVideos] = useState([]); // 각각의 변수와 업데이트할 수  있는 함수 할당

  useEffect(() => {
    console.log("useEffect");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCdKNDLgpxvybCQp_i6LuubN0cnwnCqIxQ",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []); // 한번만 호출
  // 원하는 변수(예,[videos])의 목록을 전달하면 얘네들이 업데이트 될 때마다 콜백함수 불려짐
  // 텅텅 빈 배열([])은 한번만 마운트가 되었을 때, 아무것도 전달하지 않으면 컴포넌트에 state나 prop이 업데이트 될 떄 마다 반복적으로 호출됨
  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
