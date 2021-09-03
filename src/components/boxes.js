import react, { useState } from "react";

const InputBox = (props) => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);
    const createBox = (e) => {
        e.preventDefault();
        console.log(color);

        setBoxes((boxes) => [
            ...boxes,
            <div
                className="m-3"
                style={{
                    backgroundColor: color,
                    minHeight: "250px",
                    minWidth: "250px",
                }}
            ></div>,
        ]);
        console.log(boxes);
        setColor("");
    };

    return (
        <div className="container">
            <form className="form-group" id="form" onSubmit={createBox}>
                <label htmlFor="color">
                    {" "}
                    <h1>input a color!</h1>
                </label>
                <input
                    onChange={(e) => setColor(e.target.value)}
                    className="form-control"
                    type="text"
                    name="color"
                    value={color}
                />

                <input
                    className="btn btn-primary mt-3"
                    type="submit"
                    value="Submit"
                />
            </form>

            <div className=" m-3 d-flex flex-wrap">
                {boxes.map((box) => {
                    return <>{box}</>;
                })}
            </div>
        </div>
    );
};

export default InputBox;
