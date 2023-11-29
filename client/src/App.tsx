import Navbar from "./components/Navbar";
import TextEditor from "./components/TextEditor";

function App() {
  // const todos = useAppSelector(state => state.todos.todos);
  // const dispatch = useAppDispatch();
  // const [todoText, setTodoText] = useState('');

  // const handleRemove = (id:string)=>{
  //   dispatch(removeTodo({id}));
  // }

  // const handleAdd = ()=>{
  //   dispatch(addTodo({text: todoText}))
  //   setTodoText('');
  // }

  return (
    <div className="bg-[#F3F3F3]">
      <Navbar />
      <TextEditor />
      {/* writing board */}
    </div>
  );
}

export default App;
