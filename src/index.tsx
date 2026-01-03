import App from "@/app/App";
import { createRoot } from "react-dom/client";

import "@/sass/global.scss";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
