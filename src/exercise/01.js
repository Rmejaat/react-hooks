"use client"
// Hook useState
// http://localhost:3000/alone/exercise/01.js

import * as React from "react"

// 🐶 Rend ce composant statefull en ajoutant un state email

const Login = ({ initialEmail = "" }) => {
  // ⛏️ supprime la variable email et replace par un hook useState.
  const [email, setEmail] = React.useState(
    () => window.localStorage.getItem("email") || initialEmail
  )
  const [error, setError] = React.useState(true)

  const handleChange = (event) => {
    // 🐶 Récupère la valeur du champ input avec event.target.value et met à jour l'email
    const mail = event.target.value
    setEmail(mail)
    setError(!mail.includes("@"))
    window.localStorage.setItem("email", mail)
  }

  const messageError = error
    ? "Votre email est non valide"
    : "Votre email est valide"

  return (
    <div>
      <div>
        <label>Entrez votre email : </label>
        <input value={email} onChange={handleChange} />
      </div>
      <div>Votre email est {email}</div>
      <div style={{ color: error ? "red" : "" }}>{messageError}</div>
    </div>
  )
}

function App() {
  return <Login />
}

export default App
