import { createContext, useEffect } from "react";
import { fetchMarketplaceData } from "../services/mockApi";
import useFetch from "../services/useFetch";

export const MarketplaceContext = createContext();

export function MarketplaceProvider({ children }) {
  const { data, loading, error, fetchData, reset } = useFetch(
    fetchMarketplaceData,
    false,
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MarketplaceContext.Provider
      value={{
        marketplaceData: data,
        isMarketplaceLoading: loading,
        marketplaceError: error,
        refetchMarketplace: fetchData,
        clearMarketplace: reset,
      }}
    >
      {children}
    </MarketplaceContext.Provider>
  );
}
