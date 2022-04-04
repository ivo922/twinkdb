import React, { useState } from 'react';

import SpecsData from '../DB/specs.json';

import './StatsCalculatorSpecSelect.scss';

function StatsCalculatorSpecSelect(props) {
  const images = {
    default: {
      src: require('../assets/images/question.png'),
    },
  };

  const [value, setValue] = useState('');
  const [image, setImage] = useState(images.default.src);

  const handleOptionChange = (event) => {
    props.onChange(event);

    setImage(
      require(`../assets/images/classes/class-${event.target.value}.png`)
    );
    setValue(event.target.value);
  };

  return (
    <div className="StatsCalculatorSpecSelect">
      <span style={{ backgroundImage: `url(${image})` }}></span>

      <select
        name="class-spec"
        id="class-spec"
        onChange={handleOptionChange}
        value={value}
      >
        <option value="" disabled>
          Select spec
        </option>

        {SpecsData.classes.map((_class, index) => {
          return (
            <optgroup label={_class.class} key={index}>
              {_class.specs_handle.map((spec, index) => {
                return (
                  <option value={`${_class.class_handle}-${spec}`} key={index}>
                    {_class.specs[index]}
                  </option>
                );
              })}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
}

export default StatsCalculatorSpecSelect;
