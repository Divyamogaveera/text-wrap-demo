
function RelAbsPos(){
    return(
        <>
            <div style={{border: "2px solid black", width: "300px", height: "300px"}}>
                <p style={{position: "absolute", top: "20px", left: "30px", background: "lightblue"}}>
                    This is absolute. No relative parent!
                </p>
            </div>
            <hr/>

            <div style={{border: "2px solid black", width: "300px", height: "300px", position: "relative",}}>
                <p style={{position: "absolute", top: "20px", left: "30px", background: "lightblue",}}>
                    This is absolute. Positioned relative to the parent.
                </p>
            </div>


        </>
    )
}

export default RelAbsPos;