import React from 'react';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import { Grid, Box } from '@chakra-ui/core';
import Button from '@indeed/frontend-components-react-transpiled/dist/esm/Button';

import { FieldInput } from '../components/Fields/FieldInput';
import { PageHeader } from '../components/PageHeader';
import { PageLayout } from '../layout/PageLayout';

export const JobPosting = () => {
  const form = useForm();

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));
    form.invalidateFields({
      name: 'You can display an error after an API call',
    });
    const stepWithError = form.getFieldStepName('name');
    form.goToStep(stepWithError);
  };

  return (
    <Formiz
      connect={form}
      onValidSubmit={handleSubmit}
    >
      <PageLayout>
        <form
          noValidate
          onSubmit={form.submitStep}
        >
          <PageHeader githubPath="JobWizard">
            Job Wizard
          </PageHeader>
          <FormizStep name="step1">
            <FieldInput
              name="firstName"
              label="First Name"
              required="Required"
            />
            <FieldInput
              name="lastName"
              label="Last Name"
              required="Required"
            />
            <FieldInput
              name="email"
              label="Email"
              type="email"
              required="Required"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Not a valid email',
                },
              ]}
            />
            <FieldInput
              name="phoneNumber"
              label="Phone Number"
              required="Required"
            />
          </FormizStep>
          <FormizStep name="step2">
            <FieldInput
              name="email2"
              label="Email2"
              type="email"
              required="Required"
              validations={[
                {
                  rule: isEmail(),
                  message: 'Not a valid email',
                },
              ]}
            />
          </FormizStep>
          <FormizStep name="step3">
            <FieldInput
              name="company"
              label="Company"
            />
          </FormizStep>
          {!!form.steps.length && (
            <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
              {!form.isFirstStep && (
                <Button
                  buttonType="secondary"
                  gridColumn="1"
                  onClick={form.prevStep}
                >
                  Previous
                </Button>
              )}
              <Box
                gridColumn="2"
                textAlign="center"
                fontSize="sm"
                color="gray.500"
              >
                Step {form.currentStep.index + 1} / {form.steps.length}
              </Box>
              <Button
                buttonType="primary"
                type="submit"
                gridColumn="3"
                variantColor="brand"
                isDisabled={
                  (form.isLastStep ? !form.isValid : !form.isStepValid)
                  && form.isStepSubmitted
                }
              >
                {form.isLastStep ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          )}
        </form>
      </PageLayout>
    </Formiz>
  );
};
