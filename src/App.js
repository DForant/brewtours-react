import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Tours from './components/Tours'
import Stories from './components/Stories'
import Book from './components/Book'
import Footer from './components/Footer'

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
                <Book/>
            </main>
            <Footer/>
        </>
    )
}

export default App