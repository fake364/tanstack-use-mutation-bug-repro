import {useState} from "react";
import UnauthenticatedComponent from "./UnauthenticatedComponent";
import AuthenticatedComponent from "./AuthenticatedComponent";
import {useQueryClient} from "@tanstack/react-query";

function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const client=useQueryClient();
    console.log('cache', client.getMutationCache());
    return (
        <div className="App">
            {isAuthenticated && <button
                onClick={() => setAuthenticated(() => false)}>logout</button>}
            {isAuthenticated ? <AuthenticatedComponent/> :
                <UnauthenticatedComponent authenticate={() => setAuthenticated(true)}/>}
        </div>
    );
}

export default App;
