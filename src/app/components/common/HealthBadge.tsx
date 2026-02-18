import { useAppSelector } from "@/app/state/hooks";

import { HealthStatus } from "@/state/slices/healthSlice";

export function BackendHealthBadge() {
	const health = useAppSelector((s): HealthStatus | null => s.healthSlice.status);

	const text =
		health == null ? "Checking…" : health.status ? "Backend: OK" : `Backend: Down (${health.message ?? "error"})`;

	const color = health?.status ? "green" : "red";

	return (
		<div aria-live="polite" title={text} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
			<span
				style={{
					width: 10,
					height: 10,
					borderRadius: "50%",
					background: color,
				}}
			/>
			<span>{text}</span>
		</div>
	);
}
