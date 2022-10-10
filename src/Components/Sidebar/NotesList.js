import './Noteslist.css'
import SideNote from './SideNote';
export default function NotesList(props){
    console.log(props);
    return(
        <div className='notes-list'>
        <SideNote />
        <SideNote />
        <SideNote />
        </div>
    )
}