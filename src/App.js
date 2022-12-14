import './app.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import NotesForm from "./Components/NotesWindow/NotesForm";
function App() {
  const NOTES_DATA = [
    {
      'id': 1,
      'title': "Freelance work",
      'sub-heading': "this is sub",
      'content': "This is the content for freelance work"
    },
    {
      'id': 2,
      'title': "Internship work",
      'sub-heading': "this is sub",
      'content': "This is the content for Internship work"
    },
    {
      'id': 3,
      'title': "University work",
      'sub-heading': "this is sub",
      'content': "This is the content for University work"
    },
    {
      'id': 4,
      'title': "Personal work",
      'sub-heading': "this is sub",
      'content': "This is the content for Personal work"
    }
  ]
  return (<div className="app_style">
    <Sidebar data={NOTES_DATA}/>
    <NotesForm />
    </div>
  );
}

export default App;
