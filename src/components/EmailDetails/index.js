// Write your JS code here
import {Component} from 'react'

import './index.css'

class EmailDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {threadId} = params

    const response = await fetch(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
    )
    const data = await response.json()

    const updatedData = {
      fromName: data.from_name,
      fromEmail: data.from_email,
      toName: data.to_name,
      toEmail: data.to_email,
      subject: data.subject,
      body: data.body,
    }
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {fromName, fromEmail, toEmail, toName, subject, body} = blogData

    return (
      <div className="blog-info">
        <h2>{fromName}</h2>
        <p>{fromEmail}</p>
        <p>{toName}</p>
        <p>{toEmail}</p>
        <p>{subject}</p>
        <p>{body}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">this.renderBlogItemDetails()</div>
  }
}

export default EmailDetails
