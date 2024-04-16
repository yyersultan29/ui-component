import { FC, HTMLAttributes, ReactNode } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    icon? : ReactNode
}

export const Container:FC<ContainerProps> = ({icon,children,...otherProps}) => {
    const size = 24;
    const borderRadius = 12;
    return (
        <div {...otherProps} id={size + ""}>
            {icon && <div>{icon}</div>}
            {children}
        </div>
    )
}