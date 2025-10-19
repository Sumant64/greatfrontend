import ProgressBar from "./ProgressBar";


function App() {
  return (
    <>
      <ProgressBar value={10} />
      <ProgressBar value={20} />
      <ProgressBar value={30} />
      <ProgressBar value={60} />
      <ProgressBar value={-10} />
    </>
  );
}

export default App;
