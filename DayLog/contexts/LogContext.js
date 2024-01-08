import {createContext, useState} from 'react';

const LogContext = createContext('안녕하세요');

export default LogContext;

export function LogContextProvider({children}) {
  const [text, setText] = useState('');
  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}
