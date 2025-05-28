import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <div>
                <span>{count}</span>
            </div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
};