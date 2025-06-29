import {useCallback, useState} from "react";

const HookCallback: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = useCallback(() => { // useCallback : 컴포넌트가 새로 랜더링 되어도 지정한 함수는 새로 생성되지 않음.
        setCount((c) => c + 1);
    }, []); // 컴포넌트가 처음 랜더링될 때 한 번만 생성.
    return (
      <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increase</button>
      </div>
    );
}

export default HookCallback;