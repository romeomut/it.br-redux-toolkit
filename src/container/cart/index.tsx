import { Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { RootState } from "../../store";
import { remove, updateAmount } from "./slice";

import { CartItem } from "./item";

export function CartList() {
  const list = useSelector((state: RootState) => state.cart.list);

  // const { value, list } = useSelector((state: RootState) => ({
  //   value: state.counter.value,
  //   list: state.cart.list,
  // }));

  const dispatch = useDispatch();

  return (
    <div className="list">
      <div className="list__title">Cart</div>

      <div className="list__content">
        {list.map((item) => (
          <Fragment key={item.id}>
            <CartItem
              {...item}
              onAmountChange={(amount) =>
                dispatch(updateAmount({ amount, id: item.id }))
              }
              onRemove={() => dispatch(remove({ id: item.id }))}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
