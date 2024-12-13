import { Box } from "@mui/material";
import theme from './App.jsx';

export default function InfoBox(props) {
  return(

    <Box component="section"
         sx={{ p: 2, border: 2, borderRadius: 3 }}
    >
      <Typography
            variant="h2"
            sx={{ textAlign: "left", color: "primary.main" }}
          >
            {props.title}
          </Typography>
    </Box>

  );
}