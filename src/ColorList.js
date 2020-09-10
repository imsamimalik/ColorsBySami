import React from "react";
import "./ColorList.css";
import colors from "./colors";
import { Link } from "react-router-dom";

function ColorList() {
    return (
        <div className="colors">
            {colors.map((color) => (
                <Link to={`/palette/${color.id}`}>
                    <div className="colors__colorBox" key={color.id}>
                        <div className="colors__colorsList">
                            {color.colors.map((color) => (
                                <div
                                    className="colors__colorDot"
                                    key={color.color}
                                    style={{ backgroundColor: color.color }}
                                ></div>
                            ))}
                        </div>
                        <div className="colors__colorInfo">
                            <span>{color.paletteName}</span>
                            <span>{color.emoji}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ColorList;
