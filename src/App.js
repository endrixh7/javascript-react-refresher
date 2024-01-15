import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const courseGoals = [
    {id: 1, text: "Finish the Course", },
    {id: 2, text: "Learn all about the Course Main Topic"},
    {id: 3, text: "Help other students in the Course Q&A"}
]
  return (
    <div className="App">
      <h1> Hello from React </h1>
      <GoalList goals={courseGoals} />
      <NewGoal/>
    </div>
  );
}

export default App;
