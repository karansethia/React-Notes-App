import NotesList from "./NotesList"
import Header from "./Header"
import './Sidebar.css'

export default function Sidebar(props){
    // console.log(props);
    return(<div className="sidebar">
        <Header />
        <NotesList />
    </div>
    )
}