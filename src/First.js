//we need support of react
import React from "react";
import Typography from "@material-ui/core/Typography";

//function also behaves like component
function First() {
  return (
    <div>
      <Typography variant="h1" color="initial">
        H1
      </Typography>
      <Typography variant="h2" color="inherit" align="center">
        H2
      </Typography>
      <Typography variant="h3" color="primary" align="right">
        H3
      </Typography>
      <Typography variant="subtitle1" color="primary" align="right">
        subtitle1
      </Typography>
      <Typography variant="subtitle2" color="primary" align="right">
        subtitle2
      </Typography>
      <Typography variant="body1" color="error">
        Body1
      </Typography>
      <Typography variant="h4" color="secondary">
        Secondary Display H4
      </Typography>
      <Typography variant="h5" color="textPrimary">
        textPrimary display H5
      </Typography>
      <Typography variant="h6" color="textSecondary">
        textSecondary display
      </Typography>
    </div>
  );
}

export default First;
