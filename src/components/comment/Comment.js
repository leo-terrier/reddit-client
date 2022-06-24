
export const Comment = ({index, comment, feedItem}) => {
  ///find exact property name


  const date = () => {
    const date = new Date(comment.created_utc*1000)
    const newDate = date.toDateString()
    return newDate
  }

  return (<li key={index}> 
    <div>
      <p>{date()}</p>
      <p>{comment.author}</p>
    </div>
    {comment.body}
    </li>)
}