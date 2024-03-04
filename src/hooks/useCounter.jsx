import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const handeleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevcount) => prevcount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    // isShowがtrueならflase,falseならtrueを返している
    setIsShow((previsShow) => !previsShow);
  }, []);

  return { count, isShow, handeleClick, handleDisplay };
};
