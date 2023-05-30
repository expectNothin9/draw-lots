import { useState } from 'react'
import styled from 'styled-components'
import clz from 'classnames'

const MEMBERS = [
  { id: 'dlin', name: 'Derek' },
  { id: 'yphuang', name: 'Yipei' },
  { id: 'rwen', name: 'Ray' },
  { id: 'mqiu', name: 'Marshall' },
  { id: 'vliu', name: 'Vincent' },
  { id: 'jhung', name: 'Josh' },
  { id: 'nkang', name: 'Ning' },
]

const randomPick = (members) => {
  const randomIndex = Math.floor(Math.random() * members.length)
  return members[randomIndex]
}

const AppBox = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--color-background);
  header {
    font-size: 2rem;
    margin: 1rem;
    font-weight: bold;
  }
  .members-list {
    list-style: none;
    margin: 1rem;
    padding: 0;
    border: 1px solid var(--color-border);
    .member {
      padding: 0.5rem 1rem;
    }
    .member:hover {
      background-color: var(--color-background-hover);
    }
    .member.winner {
      background-color: var(--color-primary);
      color: var(--color-on-primary);
    }
  }
  .draw-button-box {
    margin: 1rem;
    .draw-button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background: var(--color-primary);
      color: var(--color-on-primary);
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
    }
    .draw-button:hover {
      background: var(--color-primary-hover);
    }
  }
`

const App = () => {
  const [winnerId, setWinnerId] = useState(null)

  const handleDrawButtonClick = () => {
    const winner = randomPick(MEMBERS)
    setWinnerId(winner.id)
  }

  return (
    <AppBox className="draw-lots-app">
      <header>Draw Lots</header>
      <ul className="members-list">
        {MEMBERS.map((member) => (
          <li key={member.id} className={clz('member', { winner: member.id === winnerId })}>
            {member.name}
          </li>
        ))}
      </ul>
      <div className="draw-button-box">
        <button className="draw-button" onClick={handleDrawButtonClick}>
          Draw
        </button>
      </div>
    </AppBox>
  )
}

export default App
