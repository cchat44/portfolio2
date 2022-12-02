
import { useLocation } from "react-router-dom";

export default function DataRoute() {

        const location = useLocation();
        
  return <>
    <div className='d-flex flex-column'>
        <h2>This is the User Data:</h2>
    </div>
  </>
}