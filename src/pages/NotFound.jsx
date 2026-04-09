import { Link } from 'react-router-dom'
import PageSEO from '../components/PageSEO'

export default function NotFound() {
  return (
    <article className="page">
      <PageSEO
        title="Page Not Found — Financial Literacy for Medical Residents"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <h1>Page Not Found</h1>
      <p>
        The page you're looking for doesn't exist. It may have been moved or removed.
      </p>
      <p>
        <Link to="/">Return to the home page</Link> to find what you're looking for.
      </p>
    </article>
  )
}
