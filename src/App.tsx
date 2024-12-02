import TopBar from "./components/TopBar";
import ImageCard from "./components/ImageCard";
import Space from "./components/Space";
import SongTitle from "./components/SongTitle";
import Controllers from "./components/Controllers";

const App = () => {
  return (
    <div className="h-dvh max-w-screen-md py-8 ">
      <TopBar />
      <Space space="h-10" />
      <ImageCard
        src="Imagine Dragons (Believer) ALBUM Cover.png"
        alt="Imagine Dragons (Believer) ALBUM Cover"
      />
      <Space space="h-6 " />
      <SongTitle singer="IMAGINE DRAGON">Believer</SongTitle>
      <Space space="h-4 " />
      <Controllers />
    </div>
  );
};

export default App;
