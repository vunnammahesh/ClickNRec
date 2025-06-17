import PreviewArea from "./PreviewArea.jsx";
import Controls from "./Controls.jsx";
import ModeToggle from "./ModeToggle.jsx";

const RecorderContainer = () => {
  return (
    <main className="flex-grow p-4 flex flex-col items-center justify-center text-center">
      <PreviewArea />
      <ModeToggle />
      <Controls />
    </main>
  );
};

export default RecorderContainer;
