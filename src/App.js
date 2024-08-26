import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import EmailsList from './components/EmailsList'
import EmailDetails from './components/EmailDetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com"
        component={LoginForm}
      />
      <Route
        exact
        path="https://hiring.reachinbox.xyz/api/v1/onebox/list"
        component={EmailsList}
      />
      <Route
        path="https://hiring.reachinbox.xyz/api/v1/onebox/messages/:thread_id"
        component={EmailDetails}
      />
    </Switch>
  </BrowserRouter>
)

export default App
