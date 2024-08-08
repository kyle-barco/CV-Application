const DisplaySection = ({ array, InfoComponent, title }) => {
  return (
    <>
      <div className="title-resume">{title}</div>
      {array.map(
        info => <InfoComponent info={info} key={info.id} />
      )}
    </>

  )
}

export default DisplaySection
