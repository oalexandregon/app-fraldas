import { Button } from "./components";

import Stack from '@mui/material/Stack';
import MuiButton from '@mui/material/Button';

export default function CustomButton() {
  return (
    <Stack spacing={2} direction="row">
      <MuiButton variant="contained">Contained</MuiButton>
    </Stack>
  );
}