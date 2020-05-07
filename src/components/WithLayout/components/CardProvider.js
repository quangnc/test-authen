import React, { useState } from "react";

const CardContext = React.createContext([{}, () => {}]);

const CardProvider = (props) => {
  const [state, setState] = useState({ total: 0, product: [] });
  return (
    <CardContext.Provider value={[state, setState]}>
      {props.children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
