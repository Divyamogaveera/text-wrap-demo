import './Position.css'

function Position() {
    return (
        <>
            <div className="static">
                Static Position
            </div>

            <div className="relative">
                Relative Position
            </div>

            <div className="absolute">
                Absolute Position
            </div>

            <div className="fixed">
                Fixed Position
            </div>

            <div className="sticky">
                Sticky Position
            </div>
        </>
    )
}

export default Position;