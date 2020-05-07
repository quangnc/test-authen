import { useContext, useEffect } from "react";
import LocalStorage from "../utils/LocalStorage";
import { CardContext } from "../components/WithLayout/components/CardProvider";

const useCard = () => {
  const [state, setState] = useContext(CardContext);

  useEffect(() => {
    const stateLocal = LocalStorage.get("card") || null;
    if (stateLocal && Number(stateLocal.count) !== Number(state.count)) {
      setState(stateLocal);
    }
  }, []);

  const addCard = async (data) => {
    try {
      const itemProduct =
        state.product.find((item) => item.id === data.id) || null;
      let productNew = [];
      if (itemProduct) {
        productNew = state.product.map((i) => {
          if (i.id === itemProduct.id) {
            return {
              id: i.id,
              count: i.count + 1,
            };
          }
          return i;
        });
      } else {
        productNew = [...state.product, { id: data.id, count: 1 }];
      }
      const stateNew = { total: state.total + 1, product: productNew };
      setState(stateNew);
      const storage = LocalStorage.get("card") || null;
      if (storage) {
        await LocalStorage.remove("card");
        await LocalStorage.set("card", stateNew);
      } else {
        await LocalStorage.set("card", stateNew);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      const data = { total: 0, product: [] };
      await LocalStorage.remove("card");
      await LocalStorage.set("card", data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    addCard,
    clearCart,
  };
};

export default useCard;
