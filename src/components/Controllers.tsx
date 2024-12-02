import Loop from "./ui/Loop";
import Volume from "./ui/Volume";
import Shuffle from "./ui/Shuffle";
const Controllers = () => {
  return (
    <div className="flex flex-row gap-3 px-4">
      <Volume />
      <Loop />
      <Shuffle />
    </div>
  );
};

export default Controllers;
