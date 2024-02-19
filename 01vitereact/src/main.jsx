import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp(){
  return (
    <div>
   <h1>this returns the custom function of the myapp</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
  )

  const anotherUser = "hello this is another user"

  const reactElement = React.createElement('a', 
  {
    href: 'https://google.com', target: '_blank'
  },
  'click me to visit google!',
  anotherUser)

ReactDOM.createRoot(document.getElementById('root')).render(

reactElement

)
