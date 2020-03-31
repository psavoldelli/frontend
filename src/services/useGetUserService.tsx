import * as React from 'react';
import { User } from '../models/User';

const headers: HeadersInit = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3'
});

const useGetUserService = (search: string|undefined) : [User[], Error | undefined, boolean ] => {
    const [response, setResponse] = React.useState<User[]>([]);
    const [error, setError]       = React.useState<Error>();
    const [loading, setLoading]   = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetcher = async () => {
            
            if( !search ) {
                setResponse([]);
                setError(undefined);
            } else {
                setLoading(true);
                                        
                try {
                    const res   = await fetch(`https://api.github.com/search/users?q=${search}`, { headers });
                
                    if (!res.ok) {
                        throw new Error(res.statusText);
                    } 
    
                    const items = (await res.json()).items;
                    
                    setResponse(items as User[]);
                    setError(undefined);
                    
                } catch (error) {
                    setResponse([]);
                    setError(error);
                }
            }

            setLoading(false);
        };

        fetcher(); // call async after definition.

      }, [search]);

    return  [ response, error, loading ];
};

export default useGetUserService;