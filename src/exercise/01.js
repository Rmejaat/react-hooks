"use client"
// Hook useState
// http://localhost:3000/alone/exercise/01.js

import * as React from "react"

// 🐶 Rend ce composant statefull en ajoutant un state email

const Login = ({ initialEmail }) => {
  // ⛏️ supprime la variable email et replace par un hook useState.
  const [email, setEmail] = React.useState(initialEmail)

  const handleChange = (event) => {
    // 🐶 Récupère la valeur du champ input avec event.target.value et met à jour l'email
    setEmail(event.target.value)
  }

  return (
    <div>
      <div>
        <label>Entrez votre email : </label>
        <input value={email} onChange={handleChange} />
      </div>
      <div>Votre {email}</div>
    </div>
  )
}

function App() {
  return <Login initialEmail="" />
}

export default App
