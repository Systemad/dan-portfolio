import React from "react"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import { Flex } from "@chakra-ui/react"
import { Navigationbar } from "./components/Navigationbar"

function App() {
    return (
        <>
            <Flex direction="column" flex="1">
                <Navigationbar />
                <Intro />
                <Portfolio />
                <Footer />
            </Flex>
        </>
    )
}

export default App
