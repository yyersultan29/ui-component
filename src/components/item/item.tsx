import { FC, ReactNode } from "react"

interface ItemProps {
    children: ReactNode
}

export const Item: FC<ItemProps> = ({children}) => {
    return (        
        <div className="p-3 border-lg bg-gray-100 ">
            {children}
            <h1> Item changed</h1>
        </div>
    )
}