import { useState, useRef, useEffect } from "react";
import PreviewArea from "./PreviewArea";
import Controls from "./Controls";

const RecorderContainer = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [mode, setMode] = useState("audio"); // 'audio' | 'video'

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

        // Stop all tracks
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

  // ✅ Derive this function based on current state
  const handleRecord = () => {
    if (isRecording) {
      handleStop();
    } else {
      handleStart();
    }
  };

  const handleDownload = () => {
    if (audioURL) {
      const a = document.createElement("a");
      a.href = audioURL;
      a.download = mode === "audio" ? "recording.webm" : "recording_video.webm";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
        handleRecord={handleRecord}
        mode={mode}
        setMode={setMode}
      />

      <PreviewArea
        audioURL={audioURL}
        isRecording={isRecording}
        recordingTime={recordingTime}
        mode={mode}
        stream={streamRef.current}
        handleDownload={handleDownload}
      />
    </main>
  );
};

export default RecorderContainer;
