import Like from "./ui/Like";
type Song = {
  children: React.ReactNode;
  singer: string;
};

const SongTitle = ({ children, singer }: Song) => {
  return (
    <div className="w-full flex flex-col items-center gap-1 relative">
      <span className="font-medium text-2xl">{children}</span>
      <span className="font-thin">{singer}</span>
      <Like />
    </div>
  );
};

export default SongTitle;
