import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import type { GasPrices } from 'types/api/stats';

const GasInfoTooltipContent = ({ gasPrices }: {gasPrices: GasPrices}) => {
  const nameStyleProps = {
    color: useColorModeValue('yellow.100', 'yellow.600'),
  };

  return (
    <Grid templateColumns="repeat(2, max-content)" rowGap={ 2 } columnGap={ 4 } padding={ 4 } fontSize="xs">
      <GridItem { ...nameStyleProps }>Slow</GridItem>
      <GridItem>{ `${ gasPrices.slow } Gwei` }</GridItem>
      <GridItem { ...nameStyleProps }>Average</GridItem>
      <GridItem>{ `${ gasPrices.average } Gwei` }</GridItem>
      <GridItem { ...nameStyleProps }>Fast</GridItem>
      <GridItem>{ `${ gasPrices.fast } Gwei` }</GridItem>
    </Grid>
  );
};

export default React.memo(GasInfoTooltipContent);
