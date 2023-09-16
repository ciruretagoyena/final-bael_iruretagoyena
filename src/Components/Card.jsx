import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useGlobalContext } from "./utils/global.context";
import Button from "@mui/material/Button";

const DentistCard = ({ name, username, id }) => {
  const { state } = useGlobalContext();

  return (
    <Card
      className={`dentist-card ${state.theme}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="./images/doctor.jpg"
          title="DH-logo"
          sx={{ height: 200 }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {username}
          </Typography>
          <Link to={`/dentist/${id}`}>
            <Button variant="contained" color="primary">
              VER MÁS
            </Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DentistCard;
