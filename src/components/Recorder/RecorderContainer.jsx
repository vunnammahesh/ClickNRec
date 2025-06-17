import { useState, useRef, useEffect } from "react";
import PreviewArea from "./PreviewArea";
import Controls from "./Controls";

const RecorderContainer = ({ setRecordings, recordings }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [mode, setMode] = useState("audio");

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const streamRef = useRef(null);

  const handleStart = async () => {
    try {
      const constraints =
        mode === "audio" ? { audio: true } : { audio: true, video: true };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, {
          type: mode === "audio" ? "audio/webm" : "video/webm",
        });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);

        setRecordings([
          ...recordings,
          {
            url,
            mode,
            createdAt: new Date().toLocaleString(),
          },
        ]);

        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert("Permission denied or error accessing devices.");
      console.error("Error accessing devices:", err);
    }
  };

  const handleStop = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <main className="flex-grow p-4 flex flex-col items-center justify-center text-center">
      <Controls
        isRecording={isRecording}
        handleStart={handleStart}
        handleStop={handleStop}
        mode={mode}
        setMode={setMode}
        recordingTime={recordingTime}
      />

      <PreviewArea
        audioURL={audioURL}
        isRecording={isRecording}
        recordingTime={recordingTime}
        mode={mode}
        stream={streamRef.current}
      />
    </main>
  );
};

export default RecorderContainer;
