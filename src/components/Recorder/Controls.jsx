import { FaMicrophone, FaStop, FaVideo } from "react-icons/fa";

const Controls = ({
  isRecording,
  handleStart,
  handleStop,
  mode,
  setMode,
  recordingTime,
}) => {
  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleToggleMode = () => {
    if (isRecording) return; // Prevent changing mode during recording
    setMode((prev) => (prev === "audio" ? "video" : "audio"));
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {!isRecording ? (
        <button
          onClick={handleStart}
          className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300"
        >
          {mode === "audio" ? <FaMicrophone /> : <FaVideo />}
        </button>
      ) : (
        <button
          onClick={handleStop}
          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-400"
        >
          <FaStop />
        </button>
      )}

      <button
        onClick={handleToggleMode}
        disabled={isRecording}
        className={`${
          isRecording
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gray-700 hover:bg-gray-600"
        } text-white px-4 py-2 rounded`}
      >
        {mode === "audio" ? "Audio Mode" : "Video Mode"}
      </button>

      <span className="text-sm text-gray-400">{formatTime(recordingTime)}</span>
    </div>
  );
};

export default Controls;
