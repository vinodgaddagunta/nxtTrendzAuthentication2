import {Component} from 'react'
import Header from '../Header'
import EmailCart from '../EmailCart'

import './index.css'

class EmailsList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch(
      'https://hiring.reachinbox.xyz/api/v1/onebox/list',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      fromName: eachItem.from_name,
      fromEmail: eachItem.from_email,
      toName: eachItem.to_name,
      toEmail: eachItem.to_email,
      cc: eachItem.cc,
      bcc: eachItem.bcc,
      threadId: eachItem.thread_id,
      meassageId: eachItem.meassage_id,
      inReplyTo: eachItem.in_reply_to,
      references: eachItem.references,
      subject: eachItem.subject,
      body: eachItem.body,
      isRead: eachItem.is_read,
      folder: eachItem.folder,
      uid: eachItem.uid,
      sentAt: eachItem.set_at,
      archivedAt: eachItem.archived_at,
      createdAt: eachItem.created_at,
      updatedAt: eachItem.updated_at,
      deletedAt: eachItem.deleted_at,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="blog-list-container">
        <Header />
        {isLoading ? (
          <div className="loading-container">
            <div className="inner-container">
              <img
                src="https://images.saymedia-content.com/.image/t_share/MTc0NDYxNTk4MTM4NjM5NzIw/warning-do-not-open-e-mails-with-these-characteristics.png"
                className="image"
                alt="email"
              />
              <h1 className="heading">
                It is the beginning of a legendary application
              </h1>
              <p className="para">
                When you have inbound Emails you will see them here
              </p>
            </div>
          </div>
        ) : (
          blogsData.map(item => (
            <EmailCart blogData={item} key={item.threadId} />
          ))
        )}
      </div>
    )
  }
}

export default EmailsList
