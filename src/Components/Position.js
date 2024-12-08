import './Position.css'
import { Link } from "react-router-dom";


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
            <hr />
            <div style={{ backgroundColor: "gray", color: "white" }}>
                <div style={{ border: "2px solid black", width: "300px; height: 300px;" }}>
                    <p>This is static (default). The element
                        stays where it normally appears.</p>

                </div>
                <div style={{ border: "2px solid black; width: 300px", height: "300px", position: "relative" }}>
                    <p style={{position: "relative", top:"20px", left: "30px", background: "lightblue", color:'blue'}}>
                        This is relative. I moved 20px down and 30px to the right from my normal position.
                    </p>
                </div>

                <div style={{border: "2px solid black", width: "300px", height: "300px"}}>
                    <p style={{position: "relative", top: "20px", left: "30px", background: "lightblue"}}>
                        This is relative. I moved 20px down and 30px right.
                    </p>
                    <span style={{display:"block" , background: "lightcoral"}}>
                        I appear where the blue box's original position is reserved.
                    </span>
                </div>



            </div>
            <Link to='/RelAbsPos'><strong className='bg-blue-500'>RelAbsPos</strong></Link>
        </>
    )
}

export default Position;