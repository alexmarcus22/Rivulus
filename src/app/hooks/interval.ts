import { useEffect, useRef } from "react";

type UseInterval = <T, U>(callback: (vars?: U) => T, delay: number | null) => void;

// Making setInterval as a custom hook.
const useInterval: UseInterval = (callback, delay): void => {
	const callbackRef = useRef<typeof callback | null>(null);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const tick = () => {
			if (callbackRef.current) {
				callbackRef.current();
			}
		};
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

export default useInterval;
