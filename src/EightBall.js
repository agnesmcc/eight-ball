import React, { useState } from "react";
import "./EightBall.css";

const messages = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

const EightBall = () => {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    const getNewMessage = () => {
        const index = Math.floor(Math.random() * messages.length);
        setMsg(messages[index].msg);
        setColor(messages[index].color);
    };

    const reset = () => {
        setMsg("Think of a Question");
        setColor("black");
    };

    return (
        <>
        <div className="eight-ball" style={{ backgroundColor: color }}
            onClick={getNewMessage}>
            <h1 className="eight-ball-text">{msg}</h1>
        </div>

        <button onClick={reset}>Reset</button>
        </>
    );
};

export default EightBall;
