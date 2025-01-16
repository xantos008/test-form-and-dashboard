import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../internals/data/gridData';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export default function CustomizedDataGrid() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DataGrid
            checkboxSelection
            rows={rows}
            columns={columns}
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
            }
            initialState={{
              pagination: { paginationModel: { pageSize: 20 } },
            }}
            pageSizeOptions={[10, 20, 50]}
            disableColumnResize
            density="compact"
            slotProps={{
              filterPanel: {
                filterFormProps: {
                  logicOperatorInputProps: {
                    variant: 'outlined',
                    size: 'small',
                  },
                  columnInputProps: {
                    variant: 'outlined',
                    size: 'small',
                    sx: { mt: 'auto' },
                  },
                  operatorInputProps: {
                    variant: 'outlined',
                    size: 'small',
                    sx: { mt: 'auto' },
                  },
                  valueInputProps: {
                    InputComponentProps: {
                      variant: 'outlined',
                      size: 'small',
                    },
                  },
                },
              },
            }}
        />
      </LocalizationProvider>

  );
}
