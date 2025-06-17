import Header from "./components/Header";
import RecorderContainer from "./components/Recorder/RecorderContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <RecorderContainer />
      <Footer />
    </div>
  );
}

export default App;
