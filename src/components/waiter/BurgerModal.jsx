import React from 'react'

export function BurgerModal({ sethamburgerType, setShowModalWindow }) {
  
  const handleBurgerOption = (e) => {

    sethamburgerType(e.target.value)
  }
  return (
    <div onClick={handleBurgerOption}>
      <h3>soy una ventana modal</h3>
      <input type="radio" name="burgerOption" id="burgerOption1" value="pollo"/>
      <label htmlFor="burgerOption1">Pollo</label>

      <input type="radio" name="burgerOption" id="burgerOption2" value="carne"/>
      <label htmlFor="burgerOption2">Carne</label>

      <input type="radio" name="burgerOption" id="burgerOption3" value="vegetariana"/>
      <label htmlFor="burgerOption3">Vegetariana</label>

      <button onClick={() => setShowModalWindow(false)}>X</button>
    </div>
  )
}


