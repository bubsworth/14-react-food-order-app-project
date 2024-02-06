function Input({ label, id, ...props }, ref) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input ref={ref} id={id} name={id} required {...props} />
    </p>
  );
}

export default Input;
