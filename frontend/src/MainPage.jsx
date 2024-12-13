import { useState } from 'react';
import './index.css';
import { Container, createTheme, Typography, Button, Box, ThemeProvider, Dialog, DialogActions, DialogContent, DialogTitle, Card, CardContent} from "@mui/material";
import { InfoBox } from './Components/InfoBox.jsx';
import { ItemButton } from './Components/InfoButton.jsx';
import { ItemDialog } from './Components/ItemDialog.jsx';
import { InventoryCard} from './Components/InventoryCard.jsx';

export default function MainPage() {

  {
    const [openDialog, setOpenDialog] = useState(null);
    const [gold, setGold] = useState(100);
  
    const handleOpenDialog = (dialogName) => {
      setOpenDialog(dialogName);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(null);
    };
  
    const theme = createTheme({
      palette: {
        primary: {
          main: "#f57e42",
        },
        secondary: {
          main: "#27278c",
        },
      },
        typography: {
          h1: {
            fontSize: "3rem",
            fontWeight: 600,
          },
          h2: {
            fontSize: "1.5rem",
            fontWeight: 600,
          },
          p: {
            fontSize: "1rem",
            fontWeight: 300,
          },
        },
    });

    <ThemeProvider theme={theme}>
      <Container>
      <Typography
          variant="h1"
          sx={{ my: 4, textAlign: "center", color: "secondary.main" }}
        >
          Five Nights At DIDDY
        </Typography>

        <InfoBox title="Item Shop">
          <ItemButton itemName="Baby Oil">
            <ItemDialog 
              itemName ="Baby Oil" 
              dialogTitle="Baby Oil" 
              dialogDesc="Baby Oil can be spread on the floor to slip Diddy, making him take 10 damage."
              dialogPrice="25 gold">
            </ItemDialog>
          </ItemButton>

          <ItemButton itemName="FBI Body Camera">
            <ItemDialog 
              itemName ="FBI Body Camera" 
              dialogTitle="FBI Body Camera" 
              dialogDesc="This body camera sends live footage to the FBI. If you survive long enough, they will gather enough information to know where you are!"
              dialogPrice="75 gold">
            </ItemDialog>
          </ItemButton>

          <ItemButton itemName="Pepper Spray">
            <ItemDialog 
              itemName ="Pepper Spray" 
              dialogTitle="Pepper Spray" 
              dialogDesc="Pepper spray is sprayed directly into Diddy's eyes, blinding him for 8 seconds."
              dialogPrice="15 gold">
            </ItemDialog>
          </ItemButton>

          <ItemButton itemName="Identification Card">
            <ItemDialog 
              itemName ="Identification Card" 
              dialogTitle="Identification Card" 
              dialogDesc="This 18+ ID will be presented to Diddy, rendering him stunned for 5 seconds. Beware, after being stunned he will come back angrier!"
              dialogPrice="Price: FREE (one time usage)">
            </ItemDialog>
          </ItemButton>
        </InfoBox>

        <InfoBox title="Inventory">
          <InventoryCard itemName="test" itemDesc="test item description"/>

        </InfoBox>
      </Container>
    </ThemeProvider>
    
  }
}