import { FC, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ children }) => {
  return (
    <div className="rounded-lg p-5 bg-gray-100">
      {children}

      <h1>Develop</h1>
    </div>
  );
};
