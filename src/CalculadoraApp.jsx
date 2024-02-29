import { useState } from "react";
import { Button } from "./components/Button"

export const CalculadoraApp = () => {

  const [display, setDisplay] = useState('0');
  const [buffer, setBuffer] = useState('');
  const [operador, setOperador] = useState('');

  const handleNumberClick = (numero) => {
    if (display === '0') {
      setDisplay(numero.toString());
    } else {
      setDisplay(display + numero);
    }
  };

  const handleOperatorClick = (op) => {
    setOperador(op);
    setBuffer(display);
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    const num1 = parseFloat(buffer);
    const num2 = parseFloat(display);
    let result = 0;

    switch (operador) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'x':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }

    setDisplay(result);
    setBuffer('');
    setOperador('');
  };

  const handleClearClick = () => {
    setDisplay('0');
    setBuffer('');
    setOperador('');
  };

  return (
    <>
      <section className="calculadora">
        <div className="div-input">{display}</div>
        <div className="botones">
          <Button simbolo={'C'} onClick={()=>handleClearClick()} className={'Clear'}></Button>
          <Button simbolo={'+'} onClick={()=>handleOperatorClick('+')} className={'operador'}></Button>
          <Button simbolo={'-'} onClick={()=>handleOperatorClick('-')} className={'operador'}></Button>
          <Button simbolo={'/'} onClick={()=>handleOperatorClick('/')} className={'operador'}></Button>
          <Button simbolo={'x'} onClick={()=>handleOperatorClick('x')} className={'operador'}></Button>
          <Button simbolo={'0'} onClick={()=>handleNumberClick(0)} className={'numero'}></Button>
          <Button simbolo={'1'} onClick={()=>handleNumberClick(1)} className={'numero'}></Button>
          <Button simbolo={'2'} onClick={()=>handleNumberClick(2)} className={'numero'}></Button>
          <Button simbolo={'3'} onClick={()=>handleNumberClick(3)} className={'numero'}></Button>
          <Button simbolo={'4'} onClick={()=>handleNumberClick(4)} className={'numero'}></Button>
          <Button simbolo={'5'} onClick={()=>handleNumberClick(5)} className={'numero'}></Button>
          <Button simbolo={'6'} onClick={()=>handleNumberClick(6)} className={'numero'}></Button>
          <Button simbolo={'7'} onClick={()=>handleNumberClick(7)} className={'numero'}></Button>
          <Button simbolo={'8'} onClick={()=>handleNumberClick(8)} className={'numero'}></Button>
          <Button simbolo={'9'} onClick={()=>handleNumberClick(9)} className={'numero'}></Button>
          <Button simbolo={'='} onClick={()=>handleEqualsClick()} className={'Equal'}></Button>
        </div>
      </section>
    </>
  )
}
