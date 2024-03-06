import { Box, Flex, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";

const Index = () => {
  // Mock data for the portfolio, normally this would come from an API
  const portfolioData = [
    {
      stock: "AAPL",
      quantity: 50,
      price: 150.1,
      totalValue: 7505,
      change: +1.2,
    },
    {
      stock: "GOOGL",
      quantity: 10,
      price: 2750.3,
      totalValue: 27503,
      change: -0.9,
    },
    {
      stock: "AMZN",
      quantity: 5,
      price: 3200.5,
      totalValue: 16002.5,
      change: +0.3,
    },
    // More stocks...
  ];

  // Calculate total portfolio value
  const totalPortfolioValue = portfolioData.reduce((acc, stock) => acc + stock.totalValue, 0);

  return (
    <Box p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl">
          My Portfolio
        </Heading>
        <Button leftIcon={<FaRegArrowAltCircleUp />} colorScheme="green">
          Deposit Funds
        </Button>
      </Flex>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Total Portfolio Value: ${totalPortfolioValue.toFixed(2)}
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Stock</Th>
            <Th isNumeric>Quantity</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Total Value</Th>
            <Th isNumeric>Change</Th>
          </Tr>
        </Thead>
        <Tbody>
          {portfolioData.map((stock, index) => (
            <Tr key={index}>
              <Td>{stock.stock}</Td>
              <Td isNumeric>{stock.quantity}</Td>
              <Td isNumeric>${stock.price.toFixed(2)}</Td>
              <Td isNumeric>${stock.totalValue.toFixed(2)}</Td>
              <Td isNumeric>
                <Flex alignItems="center" color={stock.change >= 0 ? "green.500" : "red.500"}>
                  {stock.change >= 0 ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />}
                  {stock.change.toFixed(2)}%
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
