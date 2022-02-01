export function RespositoryItem(props) {
  return (
    <li>
      <strong>{ props.repository?.name ?? 'Default' }</strong>
      <p>{ props.repository?.description ?? 'Default' }</p>
      <a href='#'>{ props.repository?.html_url ?? 'Default' }</a>
    </li>
  );
}