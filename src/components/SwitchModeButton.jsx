import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function SwitchModeButton({ style }) {
  const { Mode, setMode } = useContext(GlobalContext);

  const handleChange = () => {
    setMode(Mode === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <FormGroup sx={style}>
        <FormControlLabel
          control={
            <Switch
              aria-label="mode switch"
              onChange={handleChange}
            />
          }
          label={Mode ? `${Mode} Mode` : 'Mode'}
        />
      </FormGroup>
    </>
  );
}

export default SwitchModeButton;
