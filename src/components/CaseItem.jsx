const CaseItem = ({csi, setOpen}) => {
  return (
    <div>
        {csi.map(item => 
            <div key={item.id}>
                <img src={item.src} alt={item.title} />
                <h2>{item.title}</h2>
                <button onClick={setOpen}>close case</button>
            </div>
            )
        }
    </div>
  )
}

export default CaseItem