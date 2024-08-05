const InputGroup = ({
  id,
  placeholder,
  type,
  onChangeData,
  labelText,
  value,
  accept,
  profilePicChange,
  "data-key": dataKey
}) => {

  return (
    <div className="form-intro container">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChangeData}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : type === "file" ? (
        <input
          type="file"
          id="file"
          onChange={profilePicChange}
        />
      ) : (
        <input
          type={type}
          accept={accept}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChangeData}
          data-key={dataKey}
        />
      )}
    </div>
  )
}

export default InputGroup

