import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import EmailsList from './components/EmailsList'
import EmailDetails from './components/EmailDetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={EmailsList} />
      <Route path="/messages/:thread_id" component={EmailDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
