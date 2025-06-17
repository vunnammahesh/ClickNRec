import ModeToggleButton from "./ModeToggleButton";

const Controls = ({ isRecording, handleRecord, mode, setMode }) => {
  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={handleRecord}
        className={`px-5 py-2 rounded text-sm font-medium ${
          isRecording
            ? "bg-red-600 text-white"
            : "bg-green-600 text-white hover:bg-green-500"
        }`}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>

      <ModeToggleButton mode={mode} setMode={setMode} isRecording={isRecording} />
    </div>
  );
};

export default Controls;
