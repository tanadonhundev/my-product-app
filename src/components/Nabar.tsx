import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#424242" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ร้านค้าออนไลน์
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
