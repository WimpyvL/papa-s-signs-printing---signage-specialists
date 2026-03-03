import React from 'react';

export interface SubService {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  materials?: string[];
  turnaround?: string;
  usp?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  subServices: SubService[];
  materials?: string[];
  turnaround?: string;
  usp?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}