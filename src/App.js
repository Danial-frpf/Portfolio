import React, { Suspense, lazy } from "react";
import { LoadingPage } from "./components";
import { Box } from "@mui/material";

const AsyncHome = lazy(() => import("./components/lazyImports/home.js"));

function App() {
    return (
        <Box>
            <Suspense fallback={<LoadingPage />}>
                <AsyncHome />
            </Suspense>
        </Box>
    );
}

export default App;
