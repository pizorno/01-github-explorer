import { useEffect, useState } from 'react';
import '../styles/repositories.scss'
import { RespositoryItem } from './RepositoryItem';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RespositoryItem key={ repository.name } repository={ repository }/>
        })}
      </ul>
    </section>
  );
}
