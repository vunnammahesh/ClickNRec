const PreviewArea = ({ audioURL, isRecording, recordingTime, mode, stream, handleDownload }) => {
  return (
    <div className="border border-gray-700 rounded-lg w-full max-w-xl p-4 bg-gray-800 mb-6 flex flex-col gap-6 items-center justify-center">
      {/* Timer */}
      <div className="text-lg font-medium text-white">
        {isRecording && <p>Recording: {recordingTime}s</p>}
      </div>

      {/* Live Preview (while recording video) */}
      {mode === "video" && isRecording && stream && (
        <video
          className="w-full rounded max-h-[300px] border border-gray-600"
          autoPlay
          muted
          ref={(video) => {
            if (video) video.srcObject = stream;
          }}
        />
      )}

      {/* Playback after stop */}
      {audioURL && !isRecording && (
        <div className="w-full flex flex-col gap-4 items-center">
          {mode === "video" ? (
            <video
              src={audioURL}
              controls
              className="w-full rounded max-h-[300px] border border-gray-600"
            />
          ) : (
            <audio
              src={audioURL}
              controls
              className="w-full rounded border border-gray-600"
            />
          )}

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="px-5 py-2 rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-500"
          >
            Download
          </button>
        </div>
      )}

      {/* Instruction when idle */}
      {!audioURL && !isRecording && (
        <p className="text-gray-400">Click "Start Recording" to begin.</p>
      )}
    </div>
  );
};

export default PreviewArea;
