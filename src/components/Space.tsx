type Space = {
  space: string;
};

const Space = ({ space }: Space) => {
  space = "h-" + space;

  return <div className={`w-full ${space}`} />;
};

export default Space;
