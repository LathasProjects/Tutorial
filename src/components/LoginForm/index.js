// Write your JS code here

import './index.css'

function LoginForm() {
  const userName = 'rahul'
  const password = 'rahul@2021'

  const onSubmitLogin = async e => {
    e.preventDefault()
    const userDetails = {userName, password}
    const APIUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await fetch(APIUrl, options)
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      } else {
        const responseData = await response.json()
        console.log(responseData)
      }
    } catch (error) {
      console.error('Error during fetch:', error)
    }
  }
  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={onSubmitLogin}>
        <button type="submit">Login with Sample</button>
      </form>
    </div>
  )
}

export default LoginForm
