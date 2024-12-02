import { useState } from "react";
import {
  IoVolumeLowOutline,
  IoVolumeMediumOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";
import VolumeBar from "./VolumeBar";
const Volume = () => {
  const [showVolumeBar, setShowVolumeBar] = useState(false);
  const [volumeRate, setVolumeRate] = useState(0);
  const handleVolumeBar = () => {
    setShowVolumeBar((prevState) => !prevState);
  };

  const autoHandleVolumeBar = () => {
    setShowVolumeBar(false);
  };
  const handleAutoClose = () => {
    setTimeout(autoHandleVolumeBar, 5000);
  };
  const trackChange = (rate: number) => {
    setVolumeRate(rate);
    handleAutoClose();
  };

  return (
    <div className="flex-1 ">
      <button
        onClick={handleVolumeBar}
        className="flex flex-row gap-2 items-center"
      >
        {volumeRate === 0 ? (
          <IoVolumeMuteOutline className="text-[1.7rem]" />
        ) : volumeRate < 50 && volumeRate > 0 ? (
          <IoVolumeLowOutline className="text-[1.7rem]" />
        ) : volumeRate > 50 ? (
          <IoVolumeMediumOutline className="text-[1.7rem]" />
        ) : (
          <IoVolumeLowOutline className="text-[1.7rem]" />
        )}
        {showVolumeBar ? (
          <VolumeBar trackChange={trackChange} rate={volumeRate} />
        ) : null}
      </button>
    </div>
  );
};

export default Volume;
