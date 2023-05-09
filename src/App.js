import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Tours from './components/Tours'
import Stories from './components/Stories'

function App(){
    return (
        <>
            <Navbar/>
            <Header/>
            <main>
                <About/>
                <Features/>
                <Tours/>
                <Stories/>
            </main>
        </>
    )
}

export default App