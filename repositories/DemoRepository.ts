// Defining exactly what a "Demo Request" looks like
export interface DemoData {
  name: string;
  email: string;
  gym: string;
  message: string;
}

export const DemoRepository = {
  
  async sendDemoRequest(data: DemoData) {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        // Your Web3Forms access key
        access_key: '21de23c6-59a4-4249-bbf9-e44a4a8872c9', 
        ...data
      })
    });

    return await response.json();
  }
};