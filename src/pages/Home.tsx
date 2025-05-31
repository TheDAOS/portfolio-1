import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <div className="h-screen flex justify-center items-center text-5xl font-minecraftia">
            {/* <span>front-end. web (developer)_</span> */}
            <TypeAnimation
                sequence={[
                    // "i'm sanju santhosh",
                    1000,
                    'front-end. web (developer)',
                ]}
                wrapper="span"
                className='cursor'
                cursor={false}
            />
        </div>
    )
}

export default Home;