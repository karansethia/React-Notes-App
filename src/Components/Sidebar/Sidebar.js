import NotesList from "./NotesList"
import Header from "./Header"

export default function Sidebar(props){
    // console.log(props);
    return(<div>
        <Header heading={props[0]}/>
        <NotesList />
    </div>
    )
}