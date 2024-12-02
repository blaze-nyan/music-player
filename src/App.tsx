import TopBar from "./components/TopBar";
import ImageCard from "./components/ImageCard";
import Space from "./components/Space";
import SongTitle from "./components/SongTitle";

const App = () => {
  return (
    <div className="h-dvh max-w-screen-md py-8 ">
      <TopBar />
      <Space space="12" />
      <ImageCard
        src="Imagine Dragons (Believer) ALBUM Cover.png"
        alt="Imagine Dragons (Believer) ALBUM Cover"
      />
      <Space space="6 " />
      <SongTitle singer="IMAGINE DRAGON">Believer</SongTitle>
    </div>
  );
};

export default App;
