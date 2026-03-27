import { categories, featuredProducts, promoBanners } from "../constants/data";

export const fetchMarketplaceData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        categories,
        promoBanners,
        featuredProducts,
      });
    }, 1500);
  });
};
