import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ColorDot({ bg, name, level, format }) {
    const [copyClass, setCopyClass] = useState(false);
    const [copymessages, setCopyMessages] = useState([
        "COPIED",
        "PASTE ME",
        "IT'LL ROCK",
        "GOT IT",
        "RIGHT ONE",
        "WILL DO",
        "PERFECT",
    ]);
    const [copyMessage, setCopyMessage] = useState("");

    const handleCopy = () => {
        setCopyMessage(
            copymessages[Math.floor(Math.random() * copymessages.length)]
        );
        setCopyClass(true);
        setTimeout(() => {
            setCopyClass(false);
        }, 500);
    };

    return (
        <CopyToClipboard onCopy={handleCopy} text={bg}>
            <div
                className="palette"
                style={{
                    backgroundColor: `${format === "minihex" ? "#" + bg : bg}`,
                }}
            >
                <span className="copy">COPY</span>
                <div
                    className={`color__overlay ${copyClass && "show"}`}
                    style={{ backgroundColor: bg }}
                ></div>
                <div className={`color__copy__msg ${copyClass && "show"}`}>
                    <h1 className={`${level <= 3 && "too-white"}`}>
                        {copyMessage}!
                    </h1>
                    <p
                        className={`${level <= 3 && "too-white"}`}
                        style={{ marginTop: "10px" }}
                    >
                        {bg}
                    </p>
                </div>
                <div className="color__box">
                    <span
                        className={`color__name ${level <= 3 && "too-white"}`}
                    >
                        {name}
                    </span>
                </div>
            </div>
        </CopyToClipboard>
    );
}

export default ColorDot;
