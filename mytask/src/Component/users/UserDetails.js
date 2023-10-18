import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error("Error fetching user details: " + error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box display="flex" justifyContent="center">
            <Card>
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2">Email: {user.email}</Typography>
                <Typography variant="body2">Phone: {user.phone}</Typography>
                {/* Add more user details as needed */}
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserDetails;
