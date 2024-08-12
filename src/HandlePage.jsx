import { Box } from "@chakra-ui/react";
import { Pagination } from "@mui/material";
import { useMovies } from "./helper/customHook";
import { useBreakpointValue } from "@chakra-ui/react";

function HandlePage() {
  const paginationSize = useBreakpointValue({
    base: "small",
    md: "medium",
    lg: "large",
  });
  const { handlePageChange, totalResults, page } = useMovies();

  const moviesPerPage = 10;
  const totalPages = Math.ceil(totalResults / moviesPerPage);

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Pagination
        onChange={handlePageChange}
        count={totalPages}
        page={page}
        size={paginationSize}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#000",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#ECC94B",
            },
            "&.Mui-selected": {
              backgroundColor: "#ECC94B",
              color: "white",
            },
          },
        }}
      />
    </Box>
  );
}

export default HandlePage;
