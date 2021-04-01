import { IconButton, InputAdornment } from '@material-ui/core';
import { VisibilityOffOutlined, VisibilityOutlined } from '@material-ui/icons';
import React from 'react';

type Props = {
  show: boolean;
  toggle: () => void;
};

const ToggleVisibility: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <InputAdornment position={'end'}>
      <IconButton aria-label={'toggle visibility'} edge={'end'} onClick={props.toggle}>
        {props.show ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
      </IconButton>
    </InputAdornment>
  );
};

export default ToggleVisibility;
