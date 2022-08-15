import React from 'react'
import Header from "../components/Navbar"
import Footer from "../components/Footer"

function Layout(props) {
    const {
        children
    } = props;
    return (
        <>
            <Header />
            <div className='bg-dark h-screen p-10'>
                
                    {children}
                
            </div>
        </>
    )
}

export default Layout