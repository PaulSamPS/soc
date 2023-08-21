import { FC, SVGProps } from 'react';

export interface DropDownItemType {
    path: string
    text: string
    Icon: FC<SVGProps<SVGSVGElement>>
    translation: string
    onNavigate?: (path: string, text?: string) => void
}
