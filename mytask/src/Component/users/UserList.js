
// import React, { useState, useEffect } from "react";
// import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
// import SearchField from "./userInput/SearchField";

// function User() {
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching data: " + error));
//   }, []);

//   const filteredUsers = users.filter((user) => {
//     // Convert both the user's name and the search query to lowercase for a case-insensitive search.
//     const userName = user.name.toLowerCase();
//     const query = searchQuery.toLowerCase();

//     return userName.includes(query);
//   });

//   return (
//     <div className="App">
//       <h2>User List Search</h2>
//       <Box display="flex" justifyContent="center">
//         <SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       </Box>
//       <h2>User List</h2>
//       <Grid container spacing={2}>
//         {filteredUsers.map((user) => (
//           <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
//             <Card style={{ margin: '10px' }}>
//               <CardContent>
//                 <Typography variant="h6">{user.name}</Typography>
//                 <Typography variant="body2">{user.email}</Typography>
//                 <Typography variant="body2">{user.phone}</Typography>
//                 <Typography variant="body2">{user.website}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default User;
// UserList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchInput from '../userInput/SearchField'
import {  Grid, Box } from '@mui/material';
import TextField from "@mui/material/TextField";

function UserList() {
  const [users, setUsers] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data: " + error));
  }, []);
  
  const handleFilterChange = (event) => {
    setFilterQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const userName = user.name.toLowerCase();
    const query = filterQuery.toLowerCase();
    return userName.includes(query);
  });

  return (
    <div>
      <h2>User Name Search</h2>
     
      <Box display="flex" justifyContent="center">
        <SearchInput
        
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          onChange={handleFilterChange}
        />
        </Box>
       
<h2>Users NameList</h2>

      <Grid container spacing={2}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
            <Link to={`/user/${user.id}`} style={{ width: "100%", textAlign: "left" }}>
              {user.name}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default UserList;
