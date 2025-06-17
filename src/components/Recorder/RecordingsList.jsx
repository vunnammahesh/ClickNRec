const RecordingsList = ({ recordings, onClose }) => {
  return (
    <div className="absolute top-16 right-4 bg-gray-800 p-4 rounded shadow-lg w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-yellow-400">My Recordings</h3>
        <button
          onClick={onClose}
          className="text-sm text-gray-400 hover:text-white"
        >
          ✖
        </button>
      </div>

      {recordings.length === 0 ? (
        <p className="text-gray-400 text-sm">No recordings yet.</p>
      ) : (
        <ul className="space-y-3">
          {recordings.map((item, idx) => (
            <li key={idx} className="flex flex-col gap-1">
              <span className="text-xs text-gray-400">{item.createdAt}</span>
              {item.mode === "audio" ? (
                <audio controls src={item.url} className="w-full" />
              ) : (
                <video controls src={item.url} className="w-full h-40" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecordingsList;
