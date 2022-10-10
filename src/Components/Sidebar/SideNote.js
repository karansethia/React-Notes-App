import './SideNote.css'
import editbtn from '/Users/karansethia/Documents/React-Notes/app-files/src/media/edit.png'
export default function SideNote(props){
    return (
        <div className="side-note">
            <h3>This is the title</h3>
            <button className='editBtn'><img src={editbtn} alt="edit"/></button>
        </div>
    )
}