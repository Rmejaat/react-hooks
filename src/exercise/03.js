"use client"
// Lifting state
// http://localhost:3000/alone/exercise/03.js

import * as React from "react"

// 👨‍✈️ Nous voulons afficher dans le composant Content, l'ordinateur préféré

// 🐶 accepte `computer` et `onComputerChange` en props de ce composant
function MyBestComputer({ computer, onComputerChange }) {
  // ⛏️ supprime ce state il sera géré dans le composant parent.

  return (
    <div>
      <label>Mon ordinateur préféré : </label>
      <input
        value={computer}
        // 🐶 remplace `setComputer` par `onComputerChange`
        onChange={(event) => onComputerChange(event.target.value)}
      />
    </div>
  )
}

function UserName() {
  const [userName, setUserName] = React.useState("")
  return (
    <div>
      <label>Nom d'utilisateur : </label>
      <input
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
    </div>
  )
}

// 🐶 accepte `computer` en props
function Content({ computer }) {
  return (
    <div>
      Salut, ton ordinateur préféré est <b>{computer}</b>
    </div>
  )
}
function App() {
  // 🐶 ajoute useState 'computer'
  const [computer, setComputer] = React.useState("MacBookPro")
  return (
    <div>
      {/* 🐶 passe computer et onComputerChange en props */}
      <MyBestComputer computer={computer} onComputerChange={setComputer} />
      <UserName />
      {/* 🐶 passe le prop computer ici */}
      <Content computer={computer} />
    </div>
  )
}
export default App
