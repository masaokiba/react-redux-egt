// import salePageLengthExperiment from '../../universal/experiments/salePageLengthExperiment';
import optionsPageExperiment from '../../universal/experiments/optionsPageExperiment';
import winston from 'winston';


// can only have 1 redirect experiment at a time.
// const redirectExperiment = funnelExperiment;
const experiments = [optionsPageExperiment];

export default function startExperiments(req, res, defaultAction, store) {
  // apply experiments
  experiments.map((experiment) => {
    winston.log('applying app experiment', {experimentName: experiment.name});
    try {
      experiment.activate(req, res, store, winston);
    } catch (e) {
      winston.log('info', 'Experiment did not meet activation requirements.', {experimentName: experiment.name});
    }
  });

  // Activate redirect experiment
  if (typeof redirectExperiment !== 'undefined') {
    winston.log('info', 'starting redirect experiment');
    try {
      redirectExperiment.activate(req, res, store);
    } catch (e) {
      winston.log('info', 'Experiment did not meet activation requirements.');
    }
  }

  winston.log('info', 'running default action');
  return defaultAction(req, res, store);
}
