export const Comment = ({index, comment}) => {
  ///find exact property name

  const date = () => {
    const newDate = new Date(comment.created_utc)
    return newDate.toUTCString()
  }

  return <li key={index}> 
  <div>
    <p>{date()}</p>
    <p>{comment.author}</p>
  </div>
  {comment.body}
  </li>
}