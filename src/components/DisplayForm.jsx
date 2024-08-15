import CollapsedForm from "./CollapsedForm";

const DisplayForm = ({
  forms,
  onChange,
  onCancel,
  toggleCollapsed,
  onRemove,
  FormComponent,
  titleKey,
  arrayName
}) => {
  return (
    <div className="forms-container">
      {forms.map((form) =>
        form.isCollapsed ? (
          <CollapsedForm
            onClick={toggleCollapsed}
            key={form.id}
            form={form}
            title={form[titleKey]}
            arrayName={arrayName}
          />
        ) : (
          <FormComponent
            onChange={onChange}
            form={form}
            key={form.id}
            cancel={onCancel}
            save={toggleCollapsed}
            remove={onRemove}
          />
        )
      )}
    </div>
  )
}

export default DisplayForm
