import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches(props) {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      
      
    </div>
  );
}