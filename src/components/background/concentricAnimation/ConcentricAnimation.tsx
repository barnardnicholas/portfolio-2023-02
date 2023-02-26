import React from 'react';
import { v4 as uuid } from 'uuid';
import { lerpColor } from '@utils/utils';
import BackgroundCanvas, { BackgroundCanvasArgs } from './BackgroundCanvas';
import BackgroundLayer from './BackgroundLayer';
import MasterRotation from './MasterRotation';
import './concentricAnimation.scss';

interface BackgroundLayer {
  numTicks: number;
  numArcs: number;
  arcRadius: number;
  tickRadius: number;
  arcColor: string;
  tickColor: string;
}

const backgroundLayers: { args: Partial<BackgroundCanvasArgs>; uid: string }[] = [
  {
    uid: uuid(),
    args: {
      numTicks: 1,
      numArcs: 0,
      tickRadius: 50,
      tickColor: '#555555',
      tickWidth: 20,
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 0,
      numArcs: 3,
      arcRadius: 60,
      arcColor: '#444444',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 3,
      numArcs: 0,
      tickRadius: 100,
      tickColor: '#555555',
      tickWidth: 20,
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 0,
      numArcs: 3,
      arcRadius: 120,
      arcColor: '#444444',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 6,
      numArcs: 0,
      tickRadius: 200,
      tickColor: '#777777',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 0,
      numArcs: 6,
      arcRadius: 240,
      arcColor: '#666666',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 12,
      numArcs: 0,
      tickRadius: 400,
      tickColor: '#999999',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 0,
      numArcs: 12,
      arcRadius: 380,
      arcColor: '#888888',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 24,
      numArcs: 0,
      tickRadius: 500,
      tickColor: '#BBBBBB',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 0,
      numArcs: 24,
      arcRadius: 580,
      arcColor: '#AAAAAA',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 40,
      numArcs: 0,
      tickRadius: 800,
      tickColor: '#DDDDDD',
    },
  },
  {
    uid: uuid(),
    args: {
      numTicks: 0,
      numArcs: 30,
      arcRadius: 800,
      arcColor: '#BBBBBB',
    },
  },
];

const minTranslateZ = -800;
const maxTranslateZ = 200;
const zSlice: number = Math.abs(maxTranslateZ - minTranslateZ) / backgroundLayers.length - 1;
const animDelay = 100;

const isDarkMode = true;

function ConcentricAnimation() {
  const minColor = isDarkMode ? '#272730' : '#f0f0f0';
  const maxColor = isDarkMode ? '#f0f0f0' : '#272730';
  return (
    <>
      <div
        className="background-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // z-index: -1;
          perspective: '800px',
          overflow: 'hidden',
        }}
      >
        <MasterRotation>
          <div
            className="layer-container"
            style={{
              position: 'absolute',
              width: '150%',
              height: '150%',
              top: '-25%',
              left: '-25%',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(-15deg) rotateY(-25deg)',
              animation: 'bg-rotate ease-in-out 10s infinite',
            }}
          >
            {backgroundLayers.map(
              (layer: { args: Partial<BackgroundLayer>; uid: string }, i: number) => {
                const color = lerpColor(minColor, maxColor, (1 / backgroundLayers.length) * i);
                return (
                  <BackgroundLayer
                    key={layer.uid}
                    translateZ={minTranslateZ + i * zSlice}
                    animDelay={i * animDelay}
                  >
                    <BackgroundCanvas
                      args={
                        {
                          ...layer.args,
                          tickColor: color,
                          arcColor: color,
                        } as Partial<BackgroundLayer>
                      }
                    />
                  </BackgroundLayer>
                );
              },
            )}
          </div>
        </MasterRotation>
      </div>
    </>
  );
}

export default ConcentricAnimation;
