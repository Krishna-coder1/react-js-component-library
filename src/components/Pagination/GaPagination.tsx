import { Pagination } from '@mui/material';
import PaginationColor from './pagination-color';
import React from "react";

type props = {
  count: number;
  onChange ?: (event: React.ChangeEvent<unknown>, value: number)=>void;
  color ?: PaginationColor;
};


const GaPagination: React.FC<props> = ({
  onChange,
  count,
  color = PaginationColor.SECONDARY,
}) => {
  return (
    <Pagination
    onChange={onChange}
    count={count}
    color={color}
    />
  );
};

export default GaPagination;