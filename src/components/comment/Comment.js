export const Comment = ({index, comment}) => {
  ///find exact property name
  return <li key={index}> 
  <div>
    <p>{comment.created_utc.toUTCString()}</p>
    <p>{comment.author}</p>
  </div>
  {comment.body}
  </li>
}