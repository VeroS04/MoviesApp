import { FC, ReactNode } from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Main } from "../Main"

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

    return (

        <>
            <Header />
            <div className="d-flex flex-grow-1">
                <Main>
                    { children }
                </Main>
            </div>
            <Footer />
        </>
    )
}

export { Layout }