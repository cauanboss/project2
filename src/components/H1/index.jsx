import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
const H1 = ({ children }) => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
    contextState,
    setContextState,
  } = theContext;
  console.log(theContext);
  return (
    <h1 className="App" onClick={() => setContextState({ ...contextState, counter: 0 })}>
      {title} {counter}
    </h1>
  );
};

export default H1;
