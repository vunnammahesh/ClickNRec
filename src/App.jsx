import { useState } from "react";
import Header from "./components/Header";
import RecorderContainer from "./components/Recorder/RecorderContainer";
import Footer from "./components/Footer";
import RecordingsList from "./components/Recorder/RecordingsList";

function App() {
  const [showRecordings, setShowRecordings] = useState(false);
  const [recordings, setRecordings] = useState([]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header
        onShowRecordings={() => setShowRecordings(true)}
        recordingsCount={recordings.length}
      />
      <RecorderContainer
        setRecordings={setRecordings}
        recordings={recordings}
      />
      {showRecordings && (
        <RecordingsList
          recordings={recordings}
          onClose={() => setShowRecordings(false)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
