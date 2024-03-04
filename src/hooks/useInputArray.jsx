import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArrray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字まで");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArrray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在しています");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
