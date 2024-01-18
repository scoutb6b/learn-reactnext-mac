import { Inter } from "next/font/google";
import { Headline } from "../components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  console.log(props);
  return (
    <Headline>
      <code className="font-mono font-bold">pages/{props.pages}.js </code>
    </Headline>
  );
}
