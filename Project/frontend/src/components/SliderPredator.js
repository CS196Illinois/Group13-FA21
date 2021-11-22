import React, { useState, useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types'

import './Slider.css';

const SliderPredator = (props) => {
    const { 
        step,
        min,
        max,
        value,
        defaultLength,
        onChangeValuep,
        linearGradientColor,
        rangeBackgroundColor
    } = props;

    const useStyles = createUseStyles({
        rangeSlider: {
            '&::-webkit-slider-thumb': {
                backgroundColor: props => props.sliderThumbColor,
                boxShadow: props => `0 0 0 3px #fff, 0 0 0 0px ${props.sliderThumbColor}`
            },
            '&::-moz-range-thumb': {
                backgroundColor: props => props.sliderThumbColor,
                boxShadow: props => `0 0 0 3px #fff, 0 0 0 6px ${props.sliderThumbColor}`
            },
        },
        rangeSliderValuep: {
            backgroundColor: props => props.sliderThumbColor,
            '&:after': {
                borderRight: props => `7px solid ${props.sliderThumbColor}`
            }
        }
    });
    const classes = useStyles(props);
    const rangeRef = useRef();
    const [range, setRange] = useState(defaultLength);

    useEffect(() => {
        const rangeValue = parseInt(rangeRef.current.value, 10);
        rangeLinearGradient(rangeValue, min, max);

        //eslint-disable-next-line
    }, [rangeRef, min, max]);

    const handleChangep = max => ep => {
        onChangeValuep(ep);
        setRange(ep.target.value);

        rangeLinearGradient(ep.target.value, min, max);
    }

    const calculatePercentage = (value, min, max) => {
        return ((value - min) / (max - min)) * 100 + '%';
    }

    const rangeLinearGradient = (value, min, max) => {
        const percentage = calculatePercentage(value, min, max);
        const newBackgroundStyle = `linear-gradient(90deg, ${linearGradientColor} 0% ${percentage}, ${rangeBackgroundColor} ${percentage} 100%)`;
        rangeRef.current.style.background = newBackgroundStyle;
    }

    return (
        <>
            <div className="slider-container">
                <input 
                    ref={rangeRef}
                    className={`range-slider ${classes.rangeSlider}`}
                    type="range"
                    step={step}
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleChangep(max)}
                />
                <span className={`range-slider-value ${classes.rangeSliderValuep}`}>{range}</span>
                <div className="range-min-max-values">
                    <span>{min}</span><span>{max}</span>
                </div>
            </div>
        </>
    )
}

SliderPredator.propTypes = {
    step: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    defaultLength: PropTypes.number.isRequired,
    sliderThumbColor: PropTypes.string.isRequired,
    linearGradientColor: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChangeValuep: PropTypes.func.isRequired,
}

export default SliderPredator;