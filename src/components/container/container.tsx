import { FC, HTMLAttributes, ReactNode } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    icon? : ReactNode
}

export const Container:FC<ContainerProps> = ({icon,children,...otherProps}) => {
    return (
        <div {...otherProps}>
            {icon && <div>{icon}</div>}
            {children}
        </div>
    )
}