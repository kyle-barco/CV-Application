const InputGroup = ({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  "data-key": dataKey
}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
      </label>
      {type === "textarea" ? (
        <textarea
          name=""
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )}
    </div>
  )
}

export default InputGroup
