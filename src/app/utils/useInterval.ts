import { useEffect, useRef } from 'react'

export const useInterval = (callback: () => void, delay: number) => {
    const callbackRef = useRef<typeof callback | null>(null);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]); //updates callbackref when callback is updated


    useEffect(() => {
        const tick = () => {
            if(callbackRef.current){
                callbackRef.current();
            }
        };

        if(delay !== null){
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};