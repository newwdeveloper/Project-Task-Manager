import img from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectDisplay = () => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={img}
        alt="no project"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new project
      </p>
      <p className="mt-8">
        <Button>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectDisplay;
