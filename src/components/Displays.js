import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Displays = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const click = (btnName) => {
    const newState = calculate(state, btnName);
    setState(newState);
  };

  return (
    <>
      <div>
        <div className="display-container">
          <div className="display display-2">
            {state.next || state.total || '0'}
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="button" onClick={() => click('AC')}>
            AC
          </button>
          <button type="button" className="button" onClick={() => click('+/-')}>
            +/-
          </button>
          <button type="button" className="button" onClick={() => click('%')}>
            %
          </button>
          <button
            type="button"
            className="button operator"
            onClick={() => click('÷')}
          >
            /
          </button>
          <button type="button" className="button" onClick={() => click('7')}>
            7
          </button>

          <button type="button" className="button" onClick={() => click('8')}>
            8
          </button>
          <button type="button" className="button" onClick={() => click('9')}>
            9
          </button>
          <button
            type="button"
            className="button operator"
            onClick={() => click('x')}
          >
            X
          </button>
          <button type="button" className="button" onClick={() => click('4')}>
            4
          </button>
          <button type="button" className="button" onClick={() => click('5')}>
            5
          </button>
          <button type="button" className="button" onClick={() => click('6')}>
            6
          </button>
          <button
            type="button"
            className="button operator"
            onClick={() => click('-')}
          >
            -
          </button>
          <button type="button" className="button" onClick={() => click('1')}>
            1
          </button>
          <button type="button" className="button" onClick={() => click('2')}>
            2
          </button>
          <button type="button" className="button" onClick={() => click('3')}>
            3
          </button>
          <button
            type="button"
            className="button operator"
            onClick={() => click('+')}
          >
            +
          </button>
          <button
            type="button"
            className="button span"
            onClick={() => click('0')}
          >
            0
          </button>
          <button type="button" className="button" onClick={() => click('.')}>
            .
          </button>
          <button
            type="button"
            className="button operator"
            onClick={() => click('=')}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Displays;
