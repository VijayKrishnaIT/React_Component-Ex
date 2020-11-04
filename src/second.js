import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ButtonGroup from "@material-ui/core/ButtonGroup";
function Second() {
  return (
    //to create block of code -- <React.Fragment>
    <React.Fragment>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="textPrimary">TextPrimary</Button>
      <Button color="error">Error</Button>
      <Button disabled>Disabled</Button>

      <br></br>
      <br></br>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" variant="contained" color="textPrimary">
        TextPrimary
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>

      <br></br>
      <br></br>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="textPrimary">
        TextPrimary
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>

      <br></br>
      <br></br>
      <Button variant="text">Default</Button>
      <Button variant="text" color="primary">
        Primary
      </Button>
      <Button variant="text" color="primary">
        Secondary
      </Button>
      <Button variant="text" color="primary">
        TextPrimary
      </Button>
      <Button variant="text" color="primary">
        Error
      </Button>
      <Button variant="text" disabled>
        Disabled
      </Button>

      <br></br>
      <br></br>
      <IconButton color="primary">
        <AccountCircleIcon fontSize="large" />
      </IconButton>

      <br></br>
      <br></br>
      <IconButton color="secondary">
        <HomeIcon fontSize="large" />
      </IconButton>

      <br></br>
      <br></br>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<AccountCircleIcon />}
      >
        Account
      </Button>

      <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<HomeIcon />}
      >
        HomeIcon
      </Button>

      <br></br>
      <br></br>
      <ButtonGroup color="primary" size="small">
        <Button>ReactJS</Button>
        <Button>ReactNative</Button>
        <Button>ReactBootStrap</Button>
        <Button>PrimeReact</Button>
      </ButtonGroup>

      <br></br>
      <br></br>
      <ButtonGroup color="primary" size="small" variant="contained">
        <Button>ReactJS</Button>
        <Button>ReactNative</Button>
        <Button>ReactBootStrap</Button>
        <Button>PrimeReact</Button>
      </ButtonGroup>

      <br></br>
      <br></br>
      <ButtonGroup color="primary" size="small" variant="text">
        <Button>ReactJS</Button>
        <Button>ReactNative</Button>
        <Button>ReactBootStrap</Button>
        <Button>PrimeReact</Button>
      </ButtonGroup>
    </React.Fragment>
  );
}

export default Second;
