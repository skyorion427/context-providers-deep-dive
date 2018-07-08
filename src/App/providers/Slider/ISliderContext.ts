import * as React from 'react';

export interface ISliderContext {}

export interface ISliderProviderProps {
  children: React.ReactNode;
}

export interface ISliderProviderState {}

export interface ISliderConsumerProps
  extends React.ConsumerProps<ISliderContext> {}
