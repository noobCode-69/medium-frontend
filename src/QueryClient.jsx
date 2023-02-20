import { QueryClient } from "react-query"

const client = new QueryClient({
    defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, // default: true
        },
      },
});

export default client;
