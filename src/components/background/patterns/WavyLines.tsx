import React from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { Pattern as CustomPattern } from '@visx/pattern';
import useUpdateMousePosition from '@hooks/useUpdateMousePosition';
import { useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { windowDimensionsAtom } from '@/atoms/atoms';
import usePreferReducedMotion from '@hooks/usePreferReducedMotion';

const defaultMargin = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 80,
};

export type PatternProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
};

export interface ItemProps {
  id: string;
  prefersReducedMotion?: boolean;
}

const WavyLinesBG: React.FC<ItemProps> = ({ id, prefersReducedMotion }) => {
  const width = 10;
  const height = 10;

  return (
    <CustomPattern id={id} width={width} height={height}>
      {!prefersReducedMotion && (
        <animateTransform
          attributeType="xml"
          attributeName="patternTransform"
          type="translate"
          from="0 0"
          to="50 0"
          dur="10s"
          repeatCount="indefinite"
        />
      )}
      <path
        d={`M 0 ${height / 2} c ${height / 8} ${-height / 4} , ${(height * 3) / 8} ${
          -height / 4
        } , ${height / 2} 0
             c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${height / 4} , ${
          height / 2
        } 0 M ${-height / 2} ${height / 2}
             c ${height / 8} ${height / 4} , ${(height * 3) / 8} ${height / 4} , ${
          height / 2
        } 0 M ${height} ${height / 2}
             c ${height / 8} ${-height / 4} , ${(height * 3) / 8} ${-height / 4} , ${height / 2} 0`}
        fill="none"
        stroke="#444444"
        strokeWidth={1}
      />
    </CustomPattern>
  );
};

export default function Example({ width, height, margin = defaultMargin }: PatternProps) {
  const {
    breakpoints: {
      values: { sm },
    },
  } = useTheme();
  const [{ w }] = useAtom(windowDimensionsAtom);
  useUpdateMousePosition(!!(w < sm));
  // use non-animated components if prefers-reduced-motion is set
  const prefersReducedMotion = usePreferReducedMotion();

  return width >= 10 ? (
    <svg width={width} height={height} style={{ width: '100%', height: '100%' }}>
      <rect x={0} y={0} width={width} height={height} fill="transparent" rx={14} />
      <Group top={margin.top} left={margin.left}>
        {[null].map((_, index) => {
          const id = `visx-pattern-demo-${index}`;

          return (
            <React.Fragment key={id}>
              {/** Like SVG <defs />, Patterns are rendered with an id */}
              <WavyLinesBG id={id} prefersReducedMotion={prefersReducedMotion} />

              {/** And are then referenced for a style attribute. */}
              <Bar fill={`url(#${id})`} x={0} y={0} width={width} height={height} rx={14} />
            </React.Fragment>
          );
        })}
      </Group>
    </svg>
  ) : null;
}
