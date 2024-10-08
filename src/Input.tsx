type InputProps = React.ComponentProps<"input"> & {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export function Input({ label, setState, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type="text"
        {...props}
        onChange={({ currentTarget }) => setState(currentTarget.value)}
      />
    </div>
  );
}
