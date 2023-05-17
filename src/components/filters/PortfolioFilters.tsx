import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import techStackItems, { TechStackItem } from '@constants/techStackItems';
import CustomChip from '@components/customChip/CustomChip';
import { AgencyWorkItem, PortfolioItem } from '@/types/shared';
import usePrevious from '@hooks/usePrevious';

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({ filteredResults }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    new URLSearchParams(searchParams).get('s') || '',
  );
  const prevSearchTerm = usePrevious(searchTerm);

  const filteredTechChips = useMemo<TechStackItem[]>(() => {
    return Object.values(techStackItems).filter((item: TechStackItem) => {
      return filteredResults.some((result: PortfolioItem | AgencyWorkItem) =>
        result.techStack.includes(item.slug),
      );
    });
  }, [filteredResults]);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      if (!searchTerm) {
        setSearchParams('', { replace: true });
        return;
      } else if (updatedSearchParams.get('s')?.toLowerCase() !== searchTerm.trim().toLowerCase()) {
        updatedSearchParams.set('s', searchTerm);
        setSearchParams(updatedSearchParams.toString(), { replace: true });
      }
    },
    [setSearchParams, searchParams],
  );

  useEffect(() => {
    if (!!searchTerm) handleSearch(searchTerm);
    else if (!searchTerm && !!prevSearchTerm) handleSearch(searchTerm);
  }, [searchTerm, handleSearch, prevSearchTerm]);

  return (
    <>
      <Box
        sx={{
          mb: 1,
          display: 'flex',
          alignItems: { sm: 'center', xs: 'flex-start' },
          flexDirection: { sm: 'row', xs: 'column' },
        }}
      >
        <TextField
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          onBlur={() => handleSearch(searchTerm)}
          onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
              handleSearch(searchTerm);
            }
          }}
          label="Search technologies"
        />
        {searchTerm.length > 0 && (
          <Typography variant="body1" sx={{ ml: { sm: 2, xs: 1 } }}>
            {filteredResults.length
              ? `${filteredResults.length} result${filteredResults.length > 1 ? 's' : ''} found.`
              : 'No results found.'}
          </Typography>
        )}
      </Box>
      <Box sx={{ mb: 4 }}>
        {filteredTechChips.map((item: TechStackItem, i: number) => {
          const isLastItem = i < filteredTechChips.length - 1;
          const isRelevant = item.name
            .trim()
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase());
          return (
            <CustomChip
              key={`${item.slug}-${i}`}
              clickable
              onClick={() => setSearchTerm(item.name)}
              onDelete={() => setSearchTerm('')}
              label={item.name}
              IconComponent={item.IconComponent ?? undefined}
              isLastItem={isLastItem}
              variant={isRelevant ? undefined : 'outlined'}
            />
          );
        })}
      </Box>
    </>
  );
};

interface PortfolioFiltersProps {
  filteredResults: PortfolioItem[] | AgencyWorkItem[];
}

export default PortfolioFilters;
