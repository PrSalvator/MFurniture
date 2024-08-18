import { RouterProvider } from "react-router-dom";
import { routes } from "@/app/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Snack, SnackbarContext } from "@/shared/contexts/snackbar";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const client = new QueryClient();

function App() {
  const [snack, setSnack] = useState<Snack>({ open: false });
  const handleClose = () => {
    setSnack(new Snack({ open: false, color: snack.color, message: snack.message }));
  };
  return (
    <SnackbarContext.Provider value={{ snack: snack, setSnack: setSnack }}>
      <Snackbar open={snack.open} autoHideDuration={snack.autoHideDuration} onClose={handleClose}>
        <Alert severity={snack.color} onClose={handleClose}>{snack.message}</Alert>
      </Snackbar>
      <QueryClientProvider client={client}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </SnackbarContext.Provider>
  );
}

export default App;
