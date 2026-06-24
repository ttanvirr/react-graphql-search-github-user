import { ApolloProvider } from "@apollo/client/react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { Toaster } from "@/components/ui/sonner.tsx"
import client from "./apolloClient.ts"

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
    <Toaster position="top-center" />
  </ApolloProvider>,
)
