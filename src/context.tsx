import React, { ReactElement } from 'react';
import ActionType from './actionTypes';



export type ContextType = {
    contextState: Record<string, {
            element?: ReactElement,
            status?: ActionType,
            cacheId?: string,
            doms?: HTMLElement[]
        }>,
    mount: (props: { cacheId: string, element: ReactElement }) => void,
    dispatch: (props: { type: ActionType, payload: any }) => void
}

export default React.createContext<ContextType>({} as ContextType);