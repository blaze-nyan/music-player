import { useState } from "react";
type TrackChange = {
  trackChange: (value: number) => void;
  rate: number;
};
const VolumeBar = ({ trackChange, rate }: TrackChange) => {
  const [value, setValue] = useState(rate);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);
    setValue(currentValue);
    trackChange(currentValue);
  };
  return (
    <div className="flex items-center justify-center">
      <input
        type="range"
        value={value}
        min={0}
        max={100}
        onChange={handleChange}
        className="h-1 bg-sky-500 [&::-webkit-slider-thumb]:bg-sky-500 hover:[&::-webkit-slider-thumb]:bg-sky-600"
      />
    </div>
  );
};

export default VolumeBar;
