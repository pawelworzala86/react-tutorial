import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

///const element = React.createElement('a',{href:'http://google.pl'},'Google')
//const element = <a href='http://google.pl'>Google</a>

ReactDom.createRoot(document.getElementById('root')).render(<App/>)