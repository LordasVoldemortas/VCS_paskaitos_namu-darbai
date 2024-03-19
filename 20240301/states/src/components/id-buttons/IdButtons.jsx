const IdButtons = () => {
      const handleClickID = (e, id) => {
    console.log(id)
  }

return (
    <>
    <h2>ID perdavimas</h2>
    <button onClick={(e) => handleClickID(e, 1)}>pirmas</button>
    <button onClick={(e) => handleClickID(e, 2)}>antras</button>
    <button onClick={(e) => handleClickID(e, 3)}>trecias</button>
    </>
)
    }
    
    export default IdButtons