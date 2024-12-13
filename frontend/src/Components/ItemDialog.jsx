import { Dialog, DialogActions, DialogContent, DialogTitle, Typography, Button } from "@mui/material";
import {openDialog, handleCloseDialog} from './App,jsx';

export default function ItemDialog(props) {

  return(

    <Dialog 
      open={openDialog === `${props.itemName}`}
      onClose={handleCloseDialog}
      aria-labelledby={`${props.itemName}-dialog-title`}
      aria-describedby={`${props.itemName}-dialog-title`}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id={`${props.itemName}-dialog-title`}>
        {props.dialogTitle}
      </DialogTitle>  
      <DialogContent dividers id={`${props.itemName}-dialog-title`}>
        <Typography gutterBottom variant="body1">
          {props.dialogDesc}
        </Typography>
        <Typography gutterBottom variant="body1" sx={{ mx:3, my: 1}}>
          {props.dialogPrice}
        </Typography>
      </DialogContent>
      <DialogActions>
      <Button onClick={handleCloseDialog}>Close</Button>
              <Button 
                variant="contained" 
                sx={{backgroundColor: "secondary.main", color: "white"}}
              >
                Purchase
              </Button>
      </DialogActions>
    </Dialog>

  );


}