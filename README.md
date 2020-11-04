# Component

    - simple function/ class behaves like component

    - react applications are component based applications.

    - as a react developer we can reuse the components.

    - we have two types of components

    1) functional level components (stateless components)

    2) class level components (stateful components)

    - class level components have more benefits compared to functional components.

    - class level supports oops where as functional level doesn't support oops.


    - In class level components maintaining the lifecycle is easy compared functional components.

Functional component

    • A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.
    • We cannot use in functional components in setState or lifecycle method().
    • Less coding.
    • Code usability is less.

Class level Component

    • A class component requires you to extend from React.Component and create a render() function which returns a React element to be rendered.
    • In class-based component, props are accessible via this.props.
    • We can use all lifecycle hooks are coming from the React.Component which you extend from in class components.
    • More coding.
    • Code usability is high.

React Component creation steps:

1. create the react application

   > create-react-app component-ex

2. switch to react application

   > cd component-ex

3. add the Material UI Framework

   - Material UI used to develop Rich UI.

   - we will add Material UI by using yarn tool.

     > yarn add @material-ui/core @material-ui/icons --save

   - Typography used to display the styled text.
     import Typography from '@material-ui/core/Typography';

   Refer: https://material-ui.com/api/typography/

Material UI

    Typography
    => align
    => color
    => variant

    Button
    variant = "contained / outlined"
    color=""
    size="small / medium/ large"


    ButtonGroup
    variant="contained / text / outlined"

    IconButton
    => startIcon
    => endIcon
