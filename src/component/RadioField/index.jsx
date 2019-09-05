import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import config from '../../pages/InputText/config';

const RadioField = (props) => {
        const { game, handleCricRoleChange, handleFootRoleChange, onBlur } = props;
        return (
            <>   
             {(game === 'Select'
                    && null
                ) || (game === 'Cricket'
                    && <div><h2>What you do ?</h2>
                        <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            // value={cricketRole}
                            onChange={handleCricRoleChange}
                        >
                            {
                                config.cricket.map(({ label, name }) => (
                                    <FormControlLabel
                                        value={name}
                                        key={name}
                                        onBlur={onBlur}
                                        control={<Radio color="default" />}
                                        label={label}
                                    />
                                ))
                            }
                        </RadioGroup>
                    </div>
                    ) || (game === 'Football'
                        && <div><h2>What you do ?</h2>
                        <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            // value={footballRole}
                            onChange={handleFootRoleChange}
                        >
                            {
                                config.football.map(({ label, name }) => (
                                    <FormControlLabel
                                        value={name}
                                        key={name}
                                        onBlur={onBlur}
                                        control={<Radio color="default" />}
                                        label={label}
                                    />
                                ))
                            }
                        </RadioGroup>
                        </div>
                    )}
             
            </>
        )
}

export default RadioField;