import React from 'react';
import ReactTooltip from 'react-tooltip'
import './Artifacts.css';

const Artifacts = ({handleMove=f=>f}) => {
  const artifacts = {
    rock: 'Камень',
    scissors: 'Ножницы',
    paper: 'Бумага'
  };

  return(
    <div>
      <div className='artifacts'>
        {Object.keys(artifacts).map(artifact =>
          <div className={`artifact artifact_${artifact}`}
               tabIndex='1'
               data-tip={artifacts[artifact]}
               onClick={() => handleMove(artifact)}
               key={artifact}
          />
        )}
      </div>
      <ReactTooltip place='bottom' type='info' className='artifact__tooltip'/>
    </div>
  )
}

export default Artifacts;