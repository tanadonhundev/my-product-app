"use client";
import { useState, useCallback } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  Card,
  CardHeader,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Container,
} from "@mui/material";
import axios from "axios";
import Navbar from "@/components/Nabar";
import TableProduct from "@/components/TableProduct";

// Define types for the product form data and error states
type ProductFormData = {
  name: string;
  price: string;
  category: string;
  description: string;
  quantity: number;
};

type ErrorState = string | null; // Error can be a string message or null

// Define response types for the API
type ProductResponse = {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    price: number;
  };
};

export default function CreateProduct() {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    price: "",
    category: "",
    description: "",
    quantity: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>(null);

  const handleSubmit = useCallback(async () => {
    const { name, price, category, description, quantity } = formData;

    console.log(formData);

    if (!name || !price || !category || !description || quantity <= 0) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    setLoading(true);

    // Use typed axios call
    const response = await axios.post<ProductResponse>(
      "http://localhost:5000/api/products",
      {
        name,
        price,
        category,
        description,
        quantity,
      }
    );
    console.log(response)
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <Card
        sx={{
          p: 3,
          maxWidth: 1200,
          mx: "auto",
          mt: 4,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardHeader
          title="เพิ่มสินค้า"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        />
        <Grid container spacing={2} justifyContent="center">
          {/* First Row - Three Inputs */}
          <Grid item xs={12} sm={4}>
            <TextField
              label="ชื่อสินค้า"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              name="name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="ราคา"
              value={formData.price}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              type="number"
              name="price"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>หมวดหมู่</InputLabel>
              <Select
                value={formData.category}
                onChange={handleSelectChange}
                label="หมวดหมู่"
                name="category"
              >
                <MenuItem value="เครื่องดื่ม">เครื่องดื่ม</MenuItem>
                <MenuItem value="ขนม">ขนม</MenuItem>
                <MenuItem value="เครื่องใช้ไฟฟ้า">เครื่องใช้ไฟฟ้า</MenuItem>
                <MenuItem value="อื่นๆ">อื่นๆ</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Second Row - Three Inputs */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="คำอธิบายสินค้า"
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              name="description"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="จำนวนสินค้า"
              value={formData.quantity}
              onChange={handleInputChange}
              fullWidth
              variant="outlined"
              type="number"
              name="quantity"
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography
                sx={{ color: "red", textAlign: "center", fontSize: 14 }}
              >
                {error}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{ mt: 2, py: 1.5, fontSize: 16 }}
            >
              {loading ? <CircularProgress size={24} /> : "เพิ่มสินค้า"}
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <TableProduct />
      </Container>
    </div>
  );
}
