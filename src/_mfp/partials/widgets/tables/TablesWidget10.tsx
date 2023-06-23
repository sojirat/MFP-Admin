import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  className: string;
};

type DropdownItem = {
  id: number;
  status: string;
  active: number;
  created_at: string;
  updated_at: string | null;
};

const TablesWidget10: React.FC<Props> = ({ className }) => {
  const [dropdownData, setDropdownData] = useState<DropdownItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/status'
        );

        if (response.data.status) {
          setDropdownData(response.data.data);
        } else {
          console.error('API request failed:', response.data.message);
        }
      } catch (error) {
        console.error('Error during API request:', error);
      }
    };

    fetchData();
  }, []);

  console.log(dropdownData); // Check the dropdownData in the console

  return (
    <div className={`card ${className}`}>
      {/* rest of your code here */}
      {
        dropdownData.map((item: DropdownItem) => (
          <div key={item.id}>
            <p>Status: {item.status}</p>
            <p>Active: {item.active}</p>
            {/* Add other fields as needed */}
          </div>
        ))
      }
      {/* rest of your code here */}
    </div>
  );
};

export { TablesWidget10 };
