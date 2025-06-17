import { FaVideo, FaMicrophone } from "react-icons/fa";

const ModeToggleButton = ({ mode, setMode, isRecording }) => {
  const toggleMode = () => {
    if (!isRecording) {
      setMode((prev) => (prev === "audio" ? "video" : "audio"));
    }
  };

  return (
    <div
      className={`flex items-center gap-2 cursor-pointer ${
        isRecording ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
      }`}
      onClick={toggleMode}
    >
      <div
        className={`flex items-center w-16 h-8 rounded-full p-1 transition ${
          mode === "video" ? "bg-blue-600" : "bg-green-600"
        } ${isRecording ? "pointer-events-none" : ""}`}
      >
        <div
          className={`w-6 h-6 rounded-full bg-white shadow-md transform transition ${
            mode === "video" ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </div>
      {mode === "audio" ? (
        <div className="flex items-center gap-1 text-green-400">
          <FaMicrophone />
          <span>Audio</span>
        </div>
      ) : (
        <div className="flex items-center gap-1 text-blue-400">
          <FaVideo />
          <span>Video</span>
        </div>
      )}
    </div>
  );
};

export default ModeToggleButton;
