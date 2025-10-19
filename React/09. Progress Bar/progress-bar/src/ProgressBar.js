import React from 'react';

const MIN = 0;
const MAX = 100;

const ProgressBar = ({ value }) => {

  const clampedValue = Math.min(Math.max(value, MIN), MAX);

    
  return (
    <div className='progress'>
        <div
            className='progress-bar'
            style={{ width: `${clampedValue}%`}}
            role='progressbar'
            aria-valuenow={clampedValue}
            aria-valuemin={MIN}
            aria-valuemax={MAX}
        >
            {clampedValue}%
        </div>
    </div>
  )
}

export default ProgressBar