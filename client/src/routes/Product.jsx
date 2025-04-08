import { getProductBySlug } from "../api/fetchProduct";
import { setLoading } from "../stores/features/Common";
import store from "../stores/store";

export const loadProductBySlug = async ({ params }) => {
  try {
    store.dispatch(setLoading(true));
    const product = await getProductBySlug(params?.slug);
    store.dispatch(setLoading(false));
    return { product };
  } catch (error) {
    console.log(error);
  }
};
