function NavBar() {
    return (
        <div>
            <div className='bg-transparent fixed z-10 w-screen flex border-2'>
                <span>Logo</span>
                <span>Thing</span>
            </div>
            <nav className='bg-transparent fixed z-10 h-screen flex flex-col-reverse gap-15 justify-center border-2'>
                <span className='rotate-270'>Home</span>
                <span className='rotate-270'>Home 1</span>
                <span className='rotate-270'>Home 2</span>
            </nav>
        </div>
    )
}

export default NavBar;