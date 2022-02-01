import { useEffect, useState } from 'react';
import '../styles/repositories.scss'
import { RespositoryItem } from './RepositoryItem';

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section class='repository-list'>
      <h1>Lista de repositórios</h1>
      <ul>
        <RespositoryItem repository={ repository }/>
        <RespositoryItem />
        <RespositoryItem repository={ repository }/>
        <RespositoryItem />
      </ul>
    </section>
  );
}
