import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../store";

const ProductCreatePage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() =>
            dispatch(incrementByAmount({ value: 1, name: "hamza" }))
          }
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ProductCreatePage;
