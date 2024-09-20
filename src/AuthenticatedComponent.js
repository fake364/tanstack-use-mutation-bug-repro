import {useQueryClient} from "@tanstack/react-query";

const AuthenticatedComponent = () => {
    const client = useQueryClient();
    return <div><h1>Authenticated</h1>
        <div>Last submit:{client.getMutationCache().find(['test-mutation'])?.state.submittedAt}</div>
    </div>;
}

export default AuthenticatedComponent;