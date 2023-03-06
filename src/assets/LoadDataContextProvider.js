import React, { createContext, useMemo, useState } from 'react'
import Papa from "papaparse";

export const  LoadDataContext = createContext();

const LoadDataContextProvider = ({children}) => {

  const data = useMemo(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    return products
  }, [])
  
  return (
    <LoadDataContext.Provider value={data}>
      {children}
    </LoadDataContext.Provider>
  )
}

export default LoadDataContextProvider
