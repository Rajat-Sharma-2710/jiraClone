import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BasicTable from './components/BasicTable';
import Header from './components/Header';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <BasicTable />
      </LocalizationProvider>
    </>
  );
}

export default App;
