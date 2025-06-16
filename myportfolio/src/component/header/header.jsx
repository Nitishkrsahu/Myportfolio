import './header.css'
import {Link} from 'react-router-dom'
export function Header(){
    return (
        <>
        <div className='container-fluid'>
            
            <header className='d-flex justify-content-between align-items-center'
        style={{
            height: '70px',
            paddingLeft: '100px',
            paddingRight: '100px'
            }}
        >
            <div>
                <Link to="/">Nitish Portfolio</Link>
            </div>
            <nav>
                <ul className='d-flex'>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to='skills'>Skills</Link></li>
                    <li><Link to='resume'>Resume/CV</Link></li>
                    <li><Link to='service'>Services</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
            
        </div>
        </>
    )
}