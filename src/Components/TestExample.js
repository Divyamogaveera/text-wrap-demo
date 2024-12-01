import './TestExample.css';

function TestExample() {
    return (
        <div>
            <h2>
                React text Wrapping and word Breaking Example
            </h2>

            <div className="container"> 
                <strong>NoWrap:</strong> this si very long sentence that will not wrap that will stays on one/same line
            </div>

            <div className="">
                <strong>wrap(normal)</strong>text will wrap naturally at word boundaries.
            </div>
        </div>
    )
}