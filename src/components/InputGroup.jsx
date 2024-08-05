const InputGroup = ({
  id,
  placeholder,
  type,
  onChange,
  labelText,
  value,
  accept,
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
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          type={type}
          accept={accept}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          data-key={dataKey}
        />
      )}
    </div>
  )
}

export default InputGroup

