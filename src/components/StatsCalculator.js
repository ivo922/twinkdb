import React, { useState, useEffect } from 'react';
import InputField from './InputField';

import helper from './StatsCalculator.helper.js';
import './StatsCalculator.scss';

import StatsCalculatorSpecSelect from './StatsCalculatorSpecSelect';

function StatsCalculator() {
  const [leftSideDisabled, setLeftSideDisabled] = useState(true);

  const [characterClass, setCharacterClass] = useState(undefined);
  const [spec, setSpec] = useState(undefined);
  const [level, setLevel] = useState(20);

  const [critical, setCritical] = useState({ flat: 0, percentage: 0 });
  const [haste, setHaste] = useState({ flat: 0, percentage: 0 });
  const [versatility, setVersatility] = useState({ flat: 0, percentage: 0 });
  const [mastery, setMastery] = useState({ flat: 0, percentage: 0 });
  const [speed, setSpeed] = useState({ flat: 0, percentage: 0 });

  useEffect(() => {
    if (!!characterClass && !!spec) {
      setLeftSideDisabled(false);
    } else {
      setLeftSideDisabled(true);
    }
  }, [characterClass, spec]);

  useEffect(() => {
    if (!characterClass || !spec || !level) {
      return;
    }

    setCritical((prevCritical) => {
      const percentage = helper.critical(prevCritical.flat, level, spec);
      return { flat: prevCritical.flat, percentage };
    });

    setHaste((prevHaste) => {
      const percentage = helper.haste(prevHaste.flat, level, spec);
      return { flat: prevHaste.flat, percentage };
    });

    setVersatility((prevVersatility) => {
      const percentage = helper.versatility(prevVersatility.flat, level, spec);
      return { flat: prevVersatility.flat, percentage };
    });

    setMastery((prevMastery) => {
      const percentage = helper.mastery(
        prevMastery.flat,
        level,
        characterClass,
        spec
      );
      return { flat: prevMastery.flat, percentage };
    });
  }, [level, spec, characterClass]);

  const handleLevelChange = (event) => {
    setLevel(Number(event.target.value));
  };

  const handleSpecSelectChange = (event) => {
    if (event.target.value === '') {
      return;
    }

    setCharacterClass(event.target.value.split('-')[0]);
    setSpec(event.target.value.split('-')[1]);
  };

  const handleCriticalChange = (event) => {
    const percentage = helper.critical(event.target.value, level, spec);
    setCritical({ flat: event.target.value, percentage });
  };

  const handleHasteChange = (event) => {
    const percentage = helper.haste(event.target.value, level, spec);
    setHaste({ flat: event.target.value, percentage });
  };

  const handleVersatilityChange = (event) => {
    const percentage = helper.versatility(event.target.value, level, spec);
    setVersatility({ flat: event.target.value, percentage });
  };

  const handleMasteryChange = (event) => {
    const percentage = helper.mastery(
      event.target.value,
      level,
      characterClass,
      spec
    );
    setMastery({ flat: event.target.value, percentage });
  };

  const handleSpeedChange = (event) => {
    const percentage = helper.speed(event.target.value, level, spec);
    setSpeed({ flat: event.target.value, percentage });
  };

  return (
    <div className="StatsCalculator">
      <div className="StatsCalculator__inputs">
        <div className="form-calculator">
          <form action="POST">
            <div className="form__row">
              <StatsCalculatorSpecSelect onChange={handleSpecSelectChange} />
            </div>

            <div className="form__row">
              <div className="form__controls">
                <InputField
                  type="number"
                  name="critical"
                  id="critical"
                  value="0"
                  disabled={leftSideDisabled}
                  label="Critical:"
                  handleChange={handleCriticalChange}
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__controls">
                <InputField
                  type="number"
                  name="haste"
                  id="haste"
                  value="0"
                  disabled={leftSideDisabled}
                  label="Haste:"
                  handleChange={handleHasteChange}
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__controls">
                <InputField
                  type="number"
                  name="versatility"
                  id="versatility"
                  value="0"
                  disabled={leftSideDisabled}
                  label="Versatility:"
                  handleChange={handleVersatilityChange}
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__controls">
                <InputField
                  type="number"
                  name="mastery"
                  id="mastery"
                  value="0"
                  disabled={leftSideDisabled}
                  label="Mastery:"
                  handleChange={handleMasteryChange}
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__controls">
                <InputField
                  type="number"
                  name="speed"
                  id="speed"
                  value="0"
                  disabled={leftSideDisabled}
                  label="Speed:"
                  handleChange={handleSpeedChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="StatsCalculator__results">
        <div className="form-calculator">
          <div className="form__row">
            <div className="form__controls">
              <InputField
                type="number"
                name="level"
                id="level"
                value={level}
                disabled={false}
                label="Level:"
                handleChange={handleLevelChange}
              />
            </div>
          </div>

          <div className="form__row">
            <InputField
              type="text"
              name="critical-result"
              id="critical-result"
              value={`${critical.percentage.toFixed(2)}%`}
              disabled={true}
            />
          </div>

          <div className="form__row">
            <InputField
              type="text"
              name="haste-result"
              id="haste-result"
              value={`${haste.percentage.toFixed(2)}%`}
              disabled={true}
            />
          </div>

          <div className="form__row">
            <InputField
              type="text"
              name="versatility-result"
              id="versatility-result"
              value={`${versatility.percentage.toFixed(2)}%`}
              disabled={true}
            />
          </div>

          <div className="form__row">
            <InputField
              type="text"
              name="mastery-result"
              id="mastery-result"
              value={`${mastery.percentage.toFixed(2)}%`}
              disabled={true}
            />
          </div>

          <div className="form__row">
            <InputField
              type="text"
              name="speed-result"
              id="speed-result"
              value={`${speed.percentage.toFixed(2)}%`}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCalculator;
