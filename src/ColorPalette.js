import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import colors from "./colors";
import "./ColorPalette.css";
import ColorDot from "./ColorDot";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import chroma from "chroma-js";

function ColorPalette() {
    const [color, setColor] = useState([]);
    const [level, setLevel] = useState(5);
    const [format, setFormat] = useState("hex");

    let { id } = useParams();
    useEffect(() => {
        setColor(colors.filter((x) => x.id === id));
        document.body.classList.add("no-scrollbar");
    }, []);

    const handlelick = () => {
        document.body.classList.remove("no-scrollbar");
    };

    const handleChange = (e) => {
        setFormat(e.target.value);
    };

    const changeFormat = (color) => {
        if (format === "hex") {
            if (level === 5) {
                return chroma(color).hex();
            } else if (level >= 5) {
                return chroma(color)
                    .darken(level - 5)
                    .hex();
            } else {
                if (level === 4) {
                    return chroma(color).brighten(1).hex();
                } else if (level === 3) {
                    return chroma(color).brighten(2).hex();
                } else if (level === 2) {
                    return chroma(color).brighten(2.5).hex();
                } else if (level === 1) {
                    return chroma(color).brighten(3).hex();
                }
            }
        } else if (format === "minihex") {
            if (level >= 5) {
                if (level === 5) {
                    return chroma(color)
                        .hex()
                        .split("", 7)
                        .splice(1, 6)
                        .join("");
                } else if (level > 5) {
                    return chroma(color)
                        .darken(level - 5)
                        .hex()
                        .split("", 7)
                        .splice(1, 6)
                        .join("");
                }
            } else {
                if (level === 4) {
                    return chroma(color)
                        .brighten(1)
                        .hex()
                        .split("", 7)
                        .splice(1, 6)
                        .join("");
                } else if (level === 3) {
                    return chroma(color)
                        .brighten(2)
                        .hex()
                        .split("", 7)
                        .splice(1, 6)
                        .join("");
                } else if (level === 2) {
                    return chroma(color)
                        .brighten(2.5)
                        .hex()
                        .split("", 7)
                        .splice(1, 6)
                        .join("");
                } else if (level === 1) {
                    return chroma(color)
                        .brighten(3)
                        .hex()
                        .split("", 7)
                        .splice(1, 6)
                        .join("");
                }
            }
        } else {
            if (level === 5) {
                return chroma(color).css(format);
            }
            if (level >= 5) {
                return chroma(color)
                    .darken(level - 5)
                    .css(format);
            } else {
                if (level === 4) {
                    return chroma(color).brighten(1).css(format);
                } else if (level === 3) {
                    return chroma(color).brighten(2).css(format);
                } else if (level === 2) {
                    return chroma(color).brighten(2.5).css(format);
                } else if (level === 1) {
                    return chroma(color).brighten(3).css(format);
                }
            }
        }
    };
    const handleSChange = (level) => {
        setLevel(level);
    };
    return (
        <div>
            {color.map((color) => (
                <Fragment key={color.id}>
                    <header className="colorPalette__header">
                        <Link to="/" onClick={handlelick}>
                            <h3 className="colorPalette__title">
                                ColorsBySami
                            </h3>
                        </Link>
                        <div className="colorPalette__slider">
                            <span
                                className="level"
                                style={{ marginRight: "20px" }}
                            >
                                Level: {level}
                            </span>
                            <Slider
                                defaultValue={level}
                                onChange={handleSChange}
                                min={1}
                                max={10}
                                step={1}
                            />
                        </div>
                        <label
                            className="custom-select"
                            htmlFor="styledSelect1"
                        >
                            <select
                                id="styledSelect1"
                                value={format}
                                onChange={handleChange}
                            >
                                <option value="hex">HEX (#AA1923)</option>
                                <option value="minihex">HEX (AA1923)</option>
                                <option value="rgb">RGB - (255,255,255)</option>
                                <option value="rgba">
                                    RGBA - (255,255,255,1)
                                </option>
                                <option value="hsl">
                                    HSL - (120,100%,50%)
                                </option>
                            </select>
                        </label>
                    </header>
                    <div className="colorPalette" key={color.id}>
                        {color.colors.map((palette) => (
                            <ColorDot
                                bg={changeFormat(palette.color)}
                                key={palette.name}
                                name={palette.name}
                                level={level}
                                format={format}
                            />
                        ))}
                    </div>
                    <div className="colorPalette__fotter">
                        <span className="footer__text">
                            {color.paletteName} {color.emoji}
                        </span>
                    </div>
                </Fragment>
            ))}
        </div>
    );
}

export default ColorPalette;
