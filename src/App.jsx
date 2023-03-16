import "./App.css";
import Content from "./Component/Content/Content";
import LeftSidebar from "./Component/LeftSIdebar/LeftSidebar";
import RightSidebar from "./Component/RightSIdebar/RightSidebar";

function App() {
  return (
    <div className="Task_Boards">
      <LeftSidebar />
      <Content />
      <RightSidebar />
    </div>
  );
}

export default App;
