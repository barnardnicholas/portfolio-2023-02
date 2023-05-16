import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Box, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import techStackItems, { TechStackItem } from '@constants/techStackItems';
import CustomChip from '@components/customChip/CustomChip';
import { PortfolioItem } from '@/types/shared';

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({ filteredResults }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTechChips = useMemo<TechStackItem[]>(() => {
    return Object.values(techStackItems).filter((item: TechStackItem) => {
      return filteredResults.some((result: PortfolioItem) => result.techStack.includes(item.slug));
    });
  }, [filteredResults]);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      if (updatedSearchParams.get('s')?.toLowerCase() !== searchTerm) {
        updatedSearchParams.set('s', searchTerm);
        setSearchParams(updatedSearchParams.toString());
      }
    },
    [setSearchParams, searchParams],
  );

  useEffect(() => handleSearch(searchTerm), [searchTerm, handleSearch]);

  return (
    <>
      <Box sx={{ mb: 2 }}>
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
      </Box>
      <Box sx={{ mb: 2 }}>
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
  filteredResults: PortfolioItem[];
}

export default PortfolioFilters;
