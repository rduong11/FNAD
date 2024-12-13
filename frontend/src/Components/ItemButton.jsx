import theme from './App.jsx';
import { Button } from "@mui/material";
import {handleOpenDialog} from './App.jsx';

export default function ItemButton(props) {
  return(
    <Button
      variant="contained"
      sx={{ mx: 7, my: 5 }}
      onClick={() => handleOpenDialog(`${props.itemName}`)}
    >
      {props.itemName}
    </Button> 
  );
}