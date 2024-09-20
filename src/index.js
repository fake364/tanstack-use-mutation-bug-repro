import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 5000,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: false,
            refetchOnMount: true,
        },
    },
});

const ReactQueryProvider = ({children}) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactQueryProvider><App/></ReactQueryProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals