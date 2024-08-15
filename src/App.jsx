import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, ListItemText, Typography, Card, CardContent, CardMedia, AppBar, Toolbar, Container, Box, CssBaseline } from '@mui/material';

function App() {
const [products, setProducts] = useState([]);
const [selectedProduct, setSelectedProduct] = useState(null);

useEffect(() => {
fetch('https://fakestoreapi.com/products/')
.then(response => response.json())
.then(data => {
setProducts(data);
// if (data.length > 0) { // Add this check
// setSelectedProduct(data[0]);
// }
});
}, []);

const handleProductClick = (product) => {
setSelectedProduct(product);
};

return (
<Box sx={{ flexGrow: 1 }}>
<CssBaseline />
<AppBar position="static" sx={{ backgroundColor: '#333', color: '#fff',p:0,m:0, boxShadow: '0px 0px 10px rgba(0,0,0,0.2)' }}>
<Toolbar>
<Typography variant="h6" component="div" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
Fake Store
</Typography>
<Box sx={{ display: 'flex', gap: 2 }}>
<Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
Home
</Typography>
<Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
Products
</Typography>
<Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
About
</Typography>
<Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
Contact
</Typography>
</Box>
</Toolbar>
</AppBar>
<Box sx={{ backgroundColor: '#ff9900', color: '#fff', py: 1,mb:3, textAlign: 'center', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)' }}>
  <Typography variant="body1" component="div">
    Hurry up! Deals are closing soon! 💰
  </Typography>
</Box>
<Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
<Grid container spacing={2} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
<Grid item xs={12} sm={6}>
<List sx={{ animation: 'slideIn 1s ease-in-out', backgroundColor: '#f0f0f0', padding: 2, borderRadius: 5, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
{products.map((product) => (
<ListItem
key={product.id}
onClick={() => handleProductClick(product)}
sx={{
animation: 'fadeIn 0.5s ease-in-out',
cursor: 'pointer',
borderBottom: '1px solid #ddd',
'&:hover': {
backgroundColor: '#ffffff',
borderRadius: 5,
transform: 'scale(1.01)',
boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
}
}}
>
<ListItemText
primary={product.title}
secondary={product.description}
primaryTypographyProps={{ fontSize: 18, fontWeight: 'bold' }}
secondaryTypographyProps={{
fontSize: 14,
sx: {
overflow: 'hidden',
textOverflow: 'ellipsis',
display: '-webkit-box',
WebkitLineClamp: 2,
WebkitBoxOrient: 'vertical'
}
}}
/>
</ListItem>
))}
</List>
</Grid>
<Grid item xs={12} sm={6}>
{selectedProduct && (
<Card sx={{ animation: 'slideIn 1s ease-in-out', backgroundColor: '#fff', padding: 2, borderRadius: 5, boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',border: '1px solid #ddd' }}>
<CardMedia component="img" image={selectedProduct.image} sx={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }} />
<CardContent>
<Typography variant="h5" sx={{ fontSize: 24, fontWeight: 'bold' }}>{selectedProduct.title}</Typography>
<Typography variant="body1" sx={{ fontSize: 16 }}>{selectedProduct.description}</Typography>
<Typography variant="body1" sx={{ fontSize: 16, color: 'green' }}>Price: {selectedProduct.price}</Typography>
<Typography variant="body1" sx={{ fontSize: 16, color: 'blue' }}>Category: {selectedProduct.category}</Typography>
<Typography variant="body1" sx={{ fontSize: 16, color: 'orange' }}>Rating: {selectedProduct.rating.rate}</Typography>
</CardContent>
</Card>
)}
</Grid>
</Grid>
</Container>
<Box sx={{ backgroundColor: '#333', color: '#fff', py: 2, textAlign: 'center', boxShadow: '0px 0px 10px rgba(0,0,0,0.2)' }}>
<Typography variant="body1" component="div">
@ 2024 Fake Store. All rights reserved.
</Typography>
<Typography variant="body1" component="div">
Terms of Service | Privacy Policy | Contact Us
</Typography>
<Typography variant="body1" component="div">
Follow us on social media:
</Typography>
<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
<Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
Facebook
</Typography>
<Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
Twitter
</Typography>
<Typography variant="body1" component="a" href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
Instagram
</Typography>
</Box>
</Box>
</Box>
);
}

export default App;