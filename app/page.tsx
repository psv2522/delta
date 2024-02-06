import dynamic from "next/dynamic";

// Disabled ssr
const App = dynamic(() => import("./App"), { ssr: false });

export default App;
