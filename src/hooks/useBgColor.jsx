import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    // return router.pathname === "/" ? "lightblue" : "lightpink";
    // swithch文で条件分岐してもあり
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "lightpink";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
