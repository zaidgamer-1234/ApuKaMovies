import { Box } from "@chakra-ui/react";
import { Pagination } from "@mui/material";
import { useMovies } from "./PostProvider";

function HandlePage() {
  const { handlePageChange, totalResults, page } = useMovies();

  const moviesPerPage = 10;

  const totalPages = Math.ceil(totalResults / moviesPerPage);

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Pagination
        onChange={handlePageChange}
        count={totalPages}
        page={page}
        color="primary"
        size="lg"
      />
    </Box>
  );
}

export default HandlePage;
