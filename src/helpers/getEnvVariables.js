export const getEnvVariables = () => {
    // import.meta.env

    return {
        VITE_APP_URL: import.meta.env.VITE_APP_URL,
    }
}