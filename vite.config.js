import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        https: false,
        host: "chirper.test", // Your custom domain
        cors: {
            origin: "http://127.0.0.1:8000", // Laravel's origin
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            credentials: true, // Allow credentials if needed
        },
        port: 5173, // Ensure the port matches the VITE_DEV_SERVER_URL
    },
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            refresh: true,
        }),
        react(),
    ],
});
