import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // ใช้โหมดสว่าง
    primary: {
      main: '#E0E0E0', // เทาอ่อน
    },
    secondary: {
      main: '#FFD700', // ทองเข้ม
    },
    background: {
      default: '#F5F5F5', // เทาอ่อนมาก (เกือบขาว)
      paper: '#FAFAFA', // พื้นหลังของ Card เป็นสีขาวนวล
    },
    text: {
      primary: '#212121', // ตัวอักษรสีดำ (อ่านง่ายขึ้นบนพื้นหลังอ่อน)
      secondary: '#616161', // ตัวอักษรสีเทาเข้ม
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#FFD700', // สีหัวข้อเป็นทองเข้ม
    },
  },
});

export default theme;
