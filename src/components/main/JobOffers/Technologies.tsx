import * as React from 'react';
import '../../../styles/main/JobOffers/Technologies.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TECH } from "../../../enums/tech.const";
import { useState } from 'react';

export interface TechnologiesProps { }

const Technologies: React.FC<TechnologiesProps> = () => {
    const [currentTech, setCurrentTech] = useState('all');
    let tech = Object.values(TECH);

    function handleTechChange(tech: string) {
        setCurrentTech(tech);
    }
    return (<div className="container">
        <div className="round" onClick={() => handleTechChange('all')}>All</div>
        {tech.map((item, index) => (
            <div
                key={index}
                color="green"
                className={item.value === currentTech ? 'round-active' : 'round'}
                onClick={() => handleTechChange(item.value)}
            >
                <FontAwesomeIcon size="2x" icon={item.icon} />
            </div>
        ))}

    </div>);
}

export default Technologies;