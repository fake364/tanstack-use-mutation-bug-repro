import {useMutation} from "@tanstack/react-query";

export const useTestMutation = (
    options
) =>
    useMutation({
        mutationKey: ['test-mutation'],
        mutationFn: () => new Promise((resolve, reject) => setTimeout(() => resolve(), 2000)),
        ...options,
    });