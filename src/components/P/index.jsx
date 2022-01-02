import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  console.log(theContext);
  return (
    <p className="App" onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>
      {body} {counter}
    </p>
  );
};

export default P;
