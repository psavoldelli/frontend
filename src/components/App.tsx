import React from 'react';
import './App.css';
import useGetUserService from '../services/useGetUserService';
import UserCard from './UserCard';
import useDebounce from '../libraries/useDebounce';

const App: React.FC = () => {
    const [ search, setSearch] = React.useState<string>('');
    const debouncedSearchTerm = useDebounce(search, 600);
    const [ response, error, loading ] = useGetUserService(debouncedSearchTerm);

    const loader = loading ? (
        <section className='app-list-message'> Loading users...</section>
    ) : null;

    const list = (!loading && response.length > 0) ? (
        <section className='app-list'>
            {  response.map( item => <UserCard key={ item.login } user={ item } /> )}
        </section>
    ) : null;

    const empty = ( debouncedSearchTerm && !loading && response.length === 0) ? (
        <section className='app-list-message'> 
            { error ? error.message : 'There is no results, sorry.'} 
        </section>
    ) : null;
  
    return (
        <div className="app">
            <header>
                <h1>Github's users</h1>
                <input placeholder='Search for users...' onChange={ (event) => setSearch(event.target.value) } value={ search || '' } />
            </header>
            { loader } { list } { empty }
        </div>
    );
}

export default App;
