import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTask />
    </div>
  );
};

export default App;
