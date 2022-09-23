import './Header.css';
import logo from '/Users/karansethia/Documents/React-Notes/app-files/src/media/notes.png';
export default function Header() {
    return (
        <div className='header'>
            <img className="logo" src={logo} alt=""/>
            <h1 className="title">YOUR NOTES</h1>
        </div>
    )
}