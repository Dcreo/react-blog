import CommentForm from "@components/comments/form"

export default function Comments({ comments = [] }) {
  return(
    <div>
      <h2>Комментарии</h2>
      <CommentForm />
      {comments?.map((comment) => {
        return(
          <div>
            {comment.sender_name}
            {comment.sender_email}
            {comment.body}
            {comment.created_at}
          </div>
        )
      })}
    </div>
  )
}
