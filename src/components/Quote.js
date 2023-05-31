import React, { useState, useEffect } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const key = 'SWda4UPf0SjrjDp+WLDMRw==NrD0nlbDFVEW2l2J';

const Quote = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': key, // passing in headers as required
          },
        });
        const data = await response.json(); // getting response
        setData(data[0].quote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return <div>{data}</div>;
};

export default Quote;
