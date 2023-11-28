// ParcelFilter.js

import React from 'react';

const ParcelFilter = ({ filterStatus, onFilterChange }) => {
  const statuses = ['all', 'pending', 'on the way', 'delivered', 'returned', 'cancelled'];

  return (
    <div className="mb-4">
      <label className="mr-2">Filter by Status:</label>
      <select
        className="border rounded p-1"
        value={filterStatus}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ParcelFilter;
 