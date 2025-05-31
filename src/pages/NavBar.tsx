function NavBar() {
    return (
        <div>
            <div className='bg-transparent fixed z-10 w-screen flex justify-between'>
                <span>Logo</span>
                <span>Thing</span>
            </div>
            <nav className='bg-transparent fixed z-10 h-screen flex flex-col gap-15 justify-center'>
                <span className='rotate-270'>Home</span>
                <span className='rotate-270'>Home 1</span>
                <span className='rotate-270'>Home 2</span>
            </nav>
        </div>
    )
}

export default NavBar;