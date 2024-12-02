type SpaceProps = {
  space: string;
};

const Space = ({ space }: SpaceProps) => {
  return <div className={`w-full ${space}`} />;
};

export default Space;
