import React, { useState } from "react";
import { Box, Grid, Image, Text, Button } from "@chakra-ui/react";
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

const ChessBoard = () => {
  const [board, setBoard] = useState([
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
  ]);

  const getPieceIcon = (piece) => {
    switch (piece[1]) {
      case "p":
        return <FaChessPawn />;
      case "r":
        return <FaChessRook />;
      case "n":
        return <FaChessKnight />;
      case "b":
        return <FaChessBishop />;
      case "q":
        return <FaChessQueen />;
      case "k":
        return <FaChessKing />;
      default:
        return null;
    }
  };

  return (
    <Grid templateColumns="repeat(8, 1fr)" width="400px" border="2px solid black">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => (
          <Box key={`${rowIndex}-${colIndex}`} bg={(rowIndex + colIndex) % 2 === 0 ? "gray.100" : "gray.500"} color={piece[0] === "w" ? "white" : "black"} p={2} fontSize="2xl" textAlign="center">
            {getPieceIcon(piece)}
          </Box>
        )),
      )}
    </Grid>
  );
};

const Index = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        React Chess
      </Text>
      <ChessBoard />
      <Button mt={4}>New Game</Button>
    </Box>
  );
};

export default Index;
