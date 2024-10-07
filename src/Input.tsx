type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

export function Input({ label, id, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...props} />
    </div>
  );
}
