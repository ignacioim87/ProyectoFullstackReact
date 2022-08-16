import React from 'react'
import Header from "../components/Navbar"
import Footer from "../components/Footer"
import styles from './index.module.css'

function Layout(props) {
    const {
        children
    } = props;
    return (
        <>
            <Header />
            <div className={styles.content}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout