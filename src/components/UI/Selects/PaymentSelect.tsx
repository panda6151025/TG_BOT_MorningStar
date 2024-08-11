import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const CurrencySelect: React.FC = () => {
  const [payment, setPayment] = useState('mpesa')

  const handleChange = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string)
  }

  return (
    <div className="mt-4">
      <Typography
        variant="h6"
        sx={{
          fontSize: '16px',
          lineHeight: '20px',
          color: '#333743',
          marginBottom: '8px',
        }}
      >
        Payment Method
      </Typography>
      <Select
        fullWidth
        labelId="Currency-Select-Label"
        id="Currency-Select"
        value={payment}
        onChange={handleChange}
        IconComponent={(props) => <KeyboardArrowDownIcon {...props} />}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#EBEDF0',
          },
          '& .MuiSelect-outlined': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        <MenuItem value={`mpesa`}>Mpesa</MenuItem>
        <MenuItem value={`greendot`}>Green Dot</MenuItem>
      </Select>
    </div>
  )
}

export default CurrencySelect
