import React, {useState} from 'react';
import PropTypes from 'prop-types';

const timezones = ['GMT', 'MST', 'HST', 'EST', 'UTC'];

export default function TimeForm({onTzChanged}){
    const [tz, setTz] = useState(timezones[0]);

    const tzChanged = function handleTzChanged(e){
        const currentTz = e.target.value;
        setTz(currentTz);
        onTzChanged(currentTz);
    }

    
        return( 
            <div className='dropdown'>
                {timezones.map(timezone => (
                        <div key = {timezone}>
                            <label>
                                <input 
                                    type='radio'
                                    onChange = {tzChanged}
                                    checked = {tz === timezone}
                                    value = {timezone}
                                    name = "timeZones"
                                />
                                    {timezone}
                            </label>
                            <br></br>
                        </div>
                ))}
            </div>
    );
};

TimeForm.propTypes = { 
    onTzChanged: PropTypes.func.isRequired,
}
