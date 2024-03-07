import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingPage = () => {
  return (
    <div className="main">
      <div className="login-page-div">
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    </div>
  );
};

export default LoadingPage;
