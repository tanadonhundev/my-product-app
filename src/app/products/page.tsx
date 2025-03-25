"use client";
import { useState } from "react";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  Card,
  CardHeader,
  Grid,
} from "@mui/material";
import axios from "axios";
import Navbar from "@/components/Nabar";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name || !price) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/products", { name, price });
      alert("สินค้าเพิ่มสำเร็จ");
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเพิ่มสินค้า");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Card
        sx={{
          p: 3,
          maxWidth: 400,
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
          <Grid item xs={12}>
            <TextField
              label="ชื่อสินค้า"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ราคา"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              variant="outlined"
              type="number"
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
    </div>
  );
}
