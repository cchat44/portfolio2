
import {
    Link,
} from 'react-router-dom';

export default function Navbar (){ 
    return <>
    <div>
        HOME
        <nav>
            <Link to='./'>Home Page</Link> &nbsp;
            <Link to='./about'>About Page</Link>
        </nav>
    </div>
    
    </>;

}