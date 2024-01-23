import { Inter } from "next/font/google";
import { Headline } from "src/components/Headline";

const inter = Inter({ subsets: ["latin"] });

export function Main(props) {
  return (
    <Headline>
      <code className="font-mono font-bold text-blue-400">
        pages/{props.pages}.js{" "}
      </code>
    </Headline>
  );
}
