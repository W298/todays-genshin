import {
  Card,
  CardContent,
  Chip,
  Box,
  Badge,
  Avatar,
  Typography,
  Checkbox
} from "@mui/material";

function ItemCard({ cardObj, categoryDB, onCheckBoxClick }) {
  return (
    <Card sx={{ mb: 1, maxWidth: { sm: "22.5rem" } }} elevation={4}>
      <CardContent>
        <Chip
          label={categoryDB[cardObj.category]}
          variant="outlined"
          size="small"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Avatar
                  alt={cardObj.subText}
                  src={cardObj.subImage}
                  sx={{
                    p: 0.3,
                    width: "1.75rem",
                    height: "1.75rem",
                    backgroundColor: "white",
                    borderWidth: "2px",
                    borderColor: "#1976d2",
                    borderStyle: "solid"
                  }}
                />
              }
            >
              <Avatar
                alt={cardObj.text}
                src={cardObj.image}
                sx={{
                  p: 0.3,
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "white",
                  borderWidth: "2px",
                  borderColor: "#1976d2",
                  borderStyle: "solid"
                }}
              />
            </Badge>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                mt: 1
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "0.75rem",
                  lineHeight: "0.5rem",
                  color: "text.secondary",
                  ml: 0.1
                }}
              >
                {cardObj.subText}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
                {cardObj.text}
              </Typography>
            </Box>
          </Box>
          <Checkbox
            label="done"
            onChange={onCheckBoxClick}
            checked={cardObj.done}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
