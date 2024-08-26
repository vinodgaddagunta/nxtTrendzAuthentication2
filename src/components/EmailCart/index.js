// Write your JS code here
import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const EmailCart = props => {
  const {blogData} = props
  const {threadId, fromName, fromEmail, subject, body} = blogData

  return (
    <div>
      <Header />
      <Link
        to={`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`}
        className="item-link"
      >
        <div className="item-container">
          <h1 className="heading">{fromName}</h1>
          <p className="from-email">{fromEmail}</p>
          <p className="subject">{subject}</p>
          <p className="body">{body}</p>
        </div>
      </Link>
    </div>
  )
}

export default EmailCart
