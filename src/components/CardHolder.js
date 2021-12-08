import { Box, Stack, Chip, Fade, Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import ItemCardContainer from "../containers/ItemCardContainer";

export default function CardHolder({
  cardDB,
  cardHolderMinusWidth,
  categoryDB,
  selCategoryList,
  setSelCategoryList
}) {
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${cardHolderMinusWidth}px)` },
        ml: { sm: `${cardHolderMinusWidth}px` },
        transition: "225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
      }}
    >
      <Stack direction="row" sx={{ my: 1, mx: 1 }} spacing={1}>
        {categoryDB.map((category, index) => {
          return (
            <Chip
              color="primary"
              key={index}
              id={index}
              label={category}
              onClick={() => {
                setSelCategoryList({
                  ...selCategoryList,
                  [index]: !selCategoryList[index]
                });
              }}
              variant={selCategoryList[index] ? "" : "outlined"}
            />
          );
        })}
      </Stack>
      <Fade in={true}>
        <Box sx={{ m: 1 }}>
          <TransitionGroup>
            {cardDB.map((card) => {
              if (selCategoryList[card.category]) {
                return (
                  <Collapse key={card.id}>
                    <ItemCardContainer id={card.id} />
                  </Collapse>
                );
              }
              return null;
            })}
          </TransitionGroup>
        </Box>
      </Fade>
    </Box>
  );
}
