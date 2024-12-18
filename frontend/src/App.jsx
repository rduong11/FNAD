import { useState } from 'react';
import './index.css';
import { Container, createTheme, Typography, Button, Box, ThemeProvider, Dialog, DialogActions, DialogContent, DialogTitle, Card, CardContent} from "@mui/material";

function App()
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


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography
          variant="h1"
          sx={{ my: 4, textAlign: "center", color: "secondary.main" }}
        >
          Five Nights At DIDDY
        </Typography>

        <Box component="section"
          sx={{ p: 2, border: 2, borderRadius: 3 }}>
          <Typography
            variant="h2"
            sx={{ textAlign: "left", color: "primary.main" }}
          >
            Item Shop
          </Typography>

          <Button 
            variant="contained"
            sx={{ mx: 7, my: 5 }}
            onClick={() => handleOpenDialog('babyOil')}
          >
            Baby Oil
          </Button>
          <Dialog 
            open={openDialog === 'babyOil'}
            onClose={handleCloseDialog}
            aria-labelledby="baby-oil-dialog-title" 
            aria-describedby="baby-oil-dialog-description"
          > 
            <DialogTitle sx={{ m: 0, p: 2 }} id="baby-oil-dialog-title">
              Baby Oil
            </DialogTitle>
            <DialogContent dividers id="baby-oil-dialog-description">
              <Typography gutterBottom variant="body1">
                Baby Oil can be spread on the floor to slip Diddy, making him take 10 damage.
              </Typography>
            </DialogContent>
            <Typography gutterBottom variant="body1" sx={{ mx:3, my: 1}}>
                Price: 25 gold
              </Typography>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button variant="contained" 
                      sx={{backgroundColor: "secondary.main", color: "white"}}>Purchase</Button>
            </DialogActions>
          </Dialog>

          <Button 
            variant="contained"
            sx={{ mx: 7, my: 5 }}
            onClick={() => handleOpenDialog('fbiCamera')}
          >
            FBI Body Camera
          </Button>
          <Dialog 
            open={openDialog === 'fbiCamera'}
            onClose={handleCloseDialog}
            aria-labelledby="fbi-camera-dialog-title" 
            aria-describedby="fbi-camera-dialog-description"
          > 
            <DialogTitle sx={{ m: 0, p: 2 }} id="fbi-camera-dialog-title">
              FBI Body Camera
            </DialogTitle>
            <DialogContent dividers id="fbi-camera-dialog-description">
              <Typography gutterBottom variant="body1">
              This body camera sends live footage to the FBI. If you survive long enough, they will gather enough information to know where you are!
              </Typography>
            </DialogContent>
            <Typography gutterBottom variant="body1" sx={{ mx:3, my: 1}}>
                Price: 75 gold
              </Typography>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button variant="contained" 
                      sx={{backgroundColor: "secondary.main", color: "white"}}>Purchase</Button>
            </DialogActions>
          </Dialog>

          <Button 
            variant="contained"
            sx={{ mx: 7, my: 5 }}
            onClick={() => handleOpenDialog('pepperSpray')}
          >
            Pepper Spray
          </Button>
          <Dialog 
            open={openDialog === 'pepperSpray'}
            onClose={handleCloseDialog}
            aria-labelledby="pepper-spray-dialog-title" 
            aria-describedby="pepper-spray-dialog-description"
          > 
            <DialogTitle sx={{ m: 0, p: 2 }} id="pepper-spray-dialog-title">
              Pepper Spray
            </DialogTitle>
            <DialogContent dividers id="pepper-spray-dialog-description">
              <Typography gutterBottom variant="body1">
                Pepper spray is sprayed directly into Diddy's eyes, blinding him for 8 seconds.
              </Typography>
            </DialogContent>
            <Typography gutterBottom variant="body1" sx={{ mx:3, my: 1}}>
                Price: 15 gold
              </Typography>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button variant="contained" 
                      sx={{backgroundColor: "secondary.main", color: "white"}}>Purchase</Button>
            </DialogActions>
          </Dialog>

          <Button 
            variant="contained"
            sx={{ mx: 7, my: 5 }}
            onClick={() => handleOpenDialog('idCard')}
          >
            Identification Card
          </Button>
          <Dialog 
            open={openDialog === 'idCard'}
            onClose={handleCloseDialog}
            aria-labelledby="id-card-dialog-title" 
            aria-describedby="id-card-dialog-description"
          > 
            <DialogTitle sx={{ m: 0, p: 2 }} id="id-card-dialog-title">
              Identification Card
            </DialogTitle>
            <DialogContent dividers id="id-card-dialog-description">
              <Typography gutterBottom variant="body1">
                This 18+ ID will be presented to Diddy, rendering him stunned for 5 seconds. Beware, after being stunned he will come back angrier!
              </Typography>
            </DialogContent>
            <Typography gutterBottom variant="body1" sx={{ mx:3, my: 1}}>
                Price: FREE (one time usage)
              </Typography>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button variant="contained" 
                      sx={{backgroundColor: "secondary.main", color: "white"}}>Purchase</Button>
            </DialogActions>
          </Dialog>
        </Box>
      
        <Box sx={{ my: 3, p: 2, border: 2, borderRadius: 3 }}>
          <Typography 
            variant="h2"
            sx={{ textAlign: "left", color: "primary.main" }}
          > Inventory
          </Typography>
          <Card sx={{ p: 1, my: 2, boxShadow: 5, display: "inline-flex" }}>
            <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="div"
              >
                Test
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
              >
                Test Item Description
              </Typography>
              <Button
                variant="contained"
                sx={{backgroundColor: "#b81004", color: "white"}}
                >
                  Sell
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Typography 
          variant="overline" 
          gutterBottom 
          sx={{fontSize: "1.5em", display: 'block' }}
        >
          Gold: {gold}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App
