type ButtonProps =  {
  incrementar: React.Dispatch<React.SetStateAction<number>>
};

export function Button({ incrementar }: ButtonProps) {
  return (
    <button onClick={() => incrementar((n) => n+1)}>
      Incrementar
    </button>
  );
}
