import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';
import styles from '../styles/Home.module.css'


const Layout = ({ children }) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className="flex" style={{ height: 835, width: 1920 }}>
                <Nav />
                <Main>
                    {children}
                </Main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
