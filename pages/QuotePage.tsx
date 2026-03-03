import React from 'react';
import QuoteAssistant from '../components/QuoteAssistant';
import { useLocation } from 'react-router-dom';

const QuotePage: React.FC = () => {
  const location = useLocation();
  const initialMessage = location.state?.initialMessage;

  return (
    <div className="pt-20 animate-fade-in">
      <QuoteAssistant initialMessage={initialMessage} />
    </div>
  );
};

export default QuotePage;