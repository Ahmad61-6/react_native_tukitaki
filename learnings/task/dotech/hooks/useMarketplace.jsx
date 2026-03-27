import { useContext } from "react";
import { MarketplaceContext } from "../contexts/MarketPlaceContext";

export const useMarketplace = () => {
  const context = useContext(MarketplaceContext);
  if (!context) {
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  }
  return context;
};
