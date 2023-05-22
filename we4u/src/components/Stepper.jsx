// import React, { useState } from 'react';
// import { Stepper, Step, StepLabel } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   stepperRoot: {
//     padding: `${theme.spacing(2)}px 0`,
//     background: 'none',
//   },
//   stepIconRoot: {
//     '&.MuiStepIcon-active': {
//       color: theme.palette.primary.main,
//     },
//     '&.MuiStepIcon-completed': {
//       color: theme.palette.secondary.main,
//     },
//   },
//   stepRoot: {
//     padding: 0,
//     '& .MuiStepConnector-root': {
//       margin: '0 8px',
//     },
//     '& .MuiStepConnector-line': {
//       borderTopWidth: 2,
//       borderTopStyle: 'solid',
//       borderColor: theme.palette.primary.main,
//     },
//     '& .MuiStepConnector-lineHorizontal': {
//       borderTopWidth: 2,
//       borderTopStyle: 'solid',
//       borderColor: theme.palette.primary.main,
//     },
//     '& .MuiStepLabel-label': {
//       display: 'none',
//     },
//   },
// }));

// export const MyStepper = () => {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <Stepper activeStep={activeStep} classes={{ root: classes.stepperRoot }}>
//       {steps.map((step, index) => (
//         <Step key={index} classes={{ root: classes.stepRoot }}>
//           <StepLabel
//             classes={{
//               root: classes.stepRoot,
//               iconContainer: classes.stepIconRoot,
//             }}
//           />
//         </Step>
//       ))}
//     </Stepper>
//   );
// };

