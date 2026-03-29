import { useState } from 'react';
import { DemoRepository } from '@/repositories/DemoRepository';

export function useDemoForm() {
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gym: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');

    try {
      // The ViewModel asks the Model to handle the network request
      const result = await DemoRepository.sendDemoRequest(formData);

      if (result.success) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', gym: '', message: '' }); 
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return {
    status,
    formData,
    handleChange,
    handleSubmit
  };
}