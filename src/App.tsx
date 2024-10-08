
import React from "react";
import { Button } from "./Button";

function user() {
  return {
    nome: "Wanderson",
    profissao: "Programador"
  }
}

type User = {
  nome: string
  profissao: string
}

function App() {
  const [data, setData] = React.useState<null | User>(null)
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    setTimeout(() => {
      setData(user())
    }, 1000)
  }, [])

  return (
    <>
    <div>
      <p>Total {total}</p>
      <Button incrementar={setTotal}/>
    </div>
    
      {data !== null && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </>
  );
}

export default App;
