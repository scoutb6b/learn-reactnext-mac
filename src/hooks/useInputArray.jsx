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
      //配列の中にテキストなので、includesだが、配列中にオブジェクトで入っている場合は、someでやる
      if (prevArray.includes(text)) {
        alert("同じ要素が既に存在しています");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return { text, array, handleChange, handleAdd };
};
