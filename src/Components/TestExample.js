import { Link } from 'react-router-dom';
import './TestExample.css';

function Textexample() {
    return (
        <div className=''>
            <h2>
                React text Wrapping and word Breaking Example
            </h2>

            <div className="container nowrap"> 
                <strong>NoWrap:</strong> this si very long sentence that will not wrap that will stays on one/same line
            </div>

            <div className="container wrap">
                <strong>wrap(normal)</strong>text will wrap naturally at word boundaries.
            </div>

            <div className="container break-word">
                <strong>break-word:</strong>ThisisReallyLongWordThatWillBreakWhenItReachesTheContainerWidth..
            </div>

            <div className="container break-all">
                <strong>break-all:</strong> this is a long sentence that will break words anywhere if needed.
            </div>

            <div className="container pre-wrap">
                <strong>pre-wrap</strong>this text preserves line breaks and spaces exactly as written. notice teh spacing and line breaks
            </div>

        <Link to="/position">
        <button className='font-[50px] w-[2.2rem] bg-gray-500 font-semibold hover:bg-gray-300 border4-dashed border-[#686868]'>CSS Positions to learn👍</button>
            </Link>

        </div>
    )
}

export default Textexample;