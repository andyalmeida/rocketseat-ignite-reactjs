type RepositoryItemProps = {
  repository: {
    description: string;
    html_url: string;
    name: string;
  }
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url} target="_blank">Acessar repositório</a>
    </li>
  );
}