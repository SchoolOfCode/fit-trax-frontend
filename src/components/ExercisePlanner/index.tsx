import * as React from 'react';
import { Container } from '@mui/material';
import Wizard from '../Wizard';
import { containerStyle } from './styles';
import ExercisePlannerStepOne from './ExercisePlannerStepOne';
import ExercisePlannerStepTwo from './ExercisePlannerStepTwo';
import ExercisePlannerStepThree from './ExercisePlannerStepThree';

const steps = ['Create/Edit workout', 'Create/Edit exercises', 'View workout'];
const stepsContent = [<ExercisePlannerStepOne />, <ExercisePlannerStepTwo />, <ExercisePlannerStepThree />];

const ExercisePlanner = () => {
  return (
    <Container fixed sx={containerStyle}>
      <Wizard steps={steps} stepsContent={stepsContent} />
    </Container>
  );
};

export default ExercisePlanner;