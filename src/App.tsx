import User from "./components/User";

function App() {
  let name = "George";
  let age = 29;

  // name = true;
  // age = "George";

  console.log(age);
  return (
    <>
      <User name={name} age={"28"} />
    </>
  );
}

export default App;
