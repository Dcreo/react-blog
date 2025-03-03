import Posts from "@components/posts/Posts"

interface MainPageProps {
  className?: string
}

export const MainPage = ({ className }: MainPageProps) => {
  return(
    <div className="MainPage">
      <Posts />
    </div>
  )
}
