import RepositoryItem from "./RepositoryItem"

export default function RepositoryList() {
  const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com'
  }

  return (
    <section className="repositoryList">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}