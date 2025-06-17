const Header = ({ onShowRecordings, recordingsCount }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold text-yellow-400">Click-N-Record</h1>
      <button
        onClick={onShowRecordings}
        className="bg-yellow-400 text-black font-medium px-4 py-2 rounded hover:bg-yellow-300"
      >
        My Recordings ({recordingsCount})
      </button>
    </header>
  );
};

export default Header;
