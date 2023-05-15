import { Link } from "react-router-dom";
import { RoutePath } from "../../types";
import cn from "classnames";

import s from "./Logo.module.css";

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <Link to={RoutePath.MainPage} className={cn(s.root, className)}>
      QPICK
    </Link>
  );
}
