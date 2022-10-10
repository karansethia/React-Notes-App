import NotesList from "./NotesList"
import Header from "./Header"

export default function Sidebar(props){
    // console.log(props);
    return(<div>
        <Header />
        <NotesList />
    </div>
    )
}