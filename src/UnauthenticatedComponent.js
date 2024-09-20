import {useQueryClient} from "@tanstack/react-query";
import {useTestMutation} from "./use-test-mutation";

const UnauthenticatedComponent = ({authenticate}) => {
    const client = useQueryClient();

    const {mutate, isPending} = useTestMutation({onSuccess: () => authenticate()});

    return <div><h1>Not Authenticated</h1>
        <div>Last submit:{client.getMutationCache().find(['test-mutation'])?.state.submittedAt}</div>
        {isPending && <div>loading...</div>}
        <button onClick={() => mutate()}>resend code</button>
    </div>
}

export default UnauthenticatedComponent;