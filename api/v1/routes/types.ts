// types.ts
import { Model, Tensor, TensorInfo } from '@tensorflow/tfjs';

export type ModelType = 'linear' | 'neural_network';

export interface TrainingData {
  features: Tensor;
  labels: Tensor;
}

export interface ModelConfig {
  modelType: ModelType;
  numFeatures: number;
  numLabels: number;
  numHiddenUnits?: number;
  learningRate?: number;
}

export interface PredictionInput {
  features: Tensor;
}

export interface PredictionOutput {
  probabilities: Tensor;
}

export interface TrainedModel {
  model: Model;
  info: TensorInfo;
}