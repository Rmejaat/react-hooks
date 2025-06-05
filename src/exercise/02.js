"use client"
// Hook useEffect
// http://localhost:3000/alone/exercise/02.js

import * as React from "react"

// 🐶 Corrige l'erreur grâce à useEffect

function Login({ initialEmail = "" }) {
  const [email, setEmail] = React.useState(
    () => window.localStorage.getItem("email") || initialEmail
  )
  const [password, setPassword] = React.useState()
  const handleChange = async (event) => setEmail(event.target.value)
  const handlePasswordChange = async (e) => setPassword(e.target.value)

  // 🐶 Créé un Hook useEffect
  // 🤖 React.useEffect(() => { ... })

  // ⛏️ Supprime ce code et insère le dans useEffect

  React.useEffect(() => {
    console.log(document.getElementById("email").value)
  })

  React.useEffect(() => {
    console.log(`Local storage email`)
    window.localStorage.setItem("email", email)
  }, [email])

  React.useEffect(() => {
    console.log(`Local storage initial`)
    window.localStorage.setItem("email", initialEmail)
  }, [initialEmail])

  return (
    <div>
      <form>
        <label>Entrez votre email : </label>
        <input id="email" value={email} onChange={handleChange} />
        <input id="password" value={password} onChange={handlePasswordChange} />
      </form>
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return <Login initialEmail={`example-${count}@example.com`} />
}

export default App
