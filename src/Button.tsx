type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

export function Button({ tamanho, children, ...props }: ButtonProps) {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
}
