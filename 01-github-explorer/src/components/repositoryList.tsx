import React, { useState, useEffect } from 'react';
import RepositoryItem from './repositoryItem';

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

const RepositoryList = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    return ( 
        <section className='repository-list'>
            <strong> Lista de Repositórios </strong>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
     );
}
 
export default RepositoryList;