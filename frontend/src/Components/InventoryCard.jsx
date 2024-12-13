import { Card, CardContent, Typography, Button } from "@mui/material";

export default function InventoryCard(props) {

  <Card sx={{ p: 1, my: 2, boxShadow: 5, display: "inline-flex" }}>
    <CardContent>
      <Typography 
        gutterBottom 
        variant="h5" 
        component="div"
      >
        {props.itemName}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary"
      >
        {props.itemDesc}
      </Typography>
      <Button
        variant="contained"
        sx={{backgroundColor: "#b81004", color: "white"}}
        >
          Sell
      </Button>
    </CardContent>
  </Card>


}