import React, { FC, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { ScaleKey, SupportedOctave } from '../../types';

import playRecordedItem from './play-recorded-item.svg';
import playScale from './play-scale.svg';
import recordButton from './record-button.svg';

interface RecordingControlsProps {
  toggleRecord: Function;
  togglePlay: Function;
  togglePlayScale: Function;
  goToPrevious: Function;
  goToNext: Function;
  scaleKey: ScaleKey;
  octave: SupportedOctave;
}

export const RecordingControls: FC<RecordingControlsProps> = ({
  toggleRecord,
  togglePlay,
  togglePlayScale,
  goToPrevious,
  goToNext,
  scaleKey,
  octave,
}) => {
  return (
    <Fragment>
      <Row>
        <Col />
        <Col xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
          <Image
            src={recordButton}
            onClick={(): void => {
              toggleRecord();
            }}
            style={{ width: '10rem' }}
          />
        </Col>
        <Col className={'d-flex flex-column justify-content-center'}>
          <Row>
            <span
              onClick={(): void => {
                goToPrevious();
              }}>
              previous
            </span>
          </Row>
          <Row>
            <Image
              src={playRecordedItem}
              className={'mt-2 mb-2'}
              onClick={(): void => {
                togglePlay();
              }}
            />
          </Row>
          <Row>
            <span
              onClick={(): void => {
                goToNext();
              }}>
              next
            </span>
          </Row>
        </Col>
      </Row>
      <Row className={'d-flex justify-content-center mt-3'}>
        Scale - {scaleKey}
        {octave}{' '}
        <Image
          src={playScale}
          className={'ml-2'}
          onClick={(): void => {
            togglePlayScale();
          }}
        />
      </Row>
    </Fragment>
  );
};