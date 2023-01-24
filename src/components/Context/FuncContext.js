import React from 'react';

// const ItemToDelCon = React.createContext(() => {});
const funcsContext = React.createContext({
	funcDel: () => {},
	funcRefresh: () => {},
});

export { funcsContext };
