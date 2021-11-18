/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { StoreProvider } from "./src/shared/context/store-context"
import "@fontsource/pacifico"
import "@fontsource/roboto";
import './src/stylesheets/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)