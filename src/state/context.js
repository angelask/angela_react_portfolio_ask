import React from 'react';

const stateContext = React.createContext({
  user: null,
  greet: () => {}
});

export default stateContext;