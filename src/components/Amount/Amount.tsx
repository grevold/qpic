import cn from "classnames";
import s from "./Amount.module.css";

interface Props {
  className?: string;
  amount: number;
}

export function Amount({ className, amount }: Props) {
  return <div className={cn(s.root, className)}>{amount}</div>;
}
