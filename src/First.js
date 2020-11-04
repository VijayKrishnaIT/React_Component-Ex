//we need support of react
import React from "react";
import Typography from "@material-ui/core/Typography";

//function also behaves like component
function First() {
  return (
    <div>
      <Typography variant="h1" color="initial">
        First Component
      </Typography>
      <Typography variant="h2" color="inherit" align="center">
        Function Component
      </Typography>
      <Typography variant="h3" color="primary" align="right">
        Function Component
      </Typography>
      <Typography variant="body1" color="error">
        Error Display
      </Typography>
      <Typography variant="h4" color="secondary">
        Secondary Display
      </Typography>
      <Typography variant="h5" color="textPrimary">
        textPrimary display
      </Typography>
      <Typography variant="h6" color="textSecondary">
        textSecondary display
      </Typography>
    </div>
  );
}

export default First;
