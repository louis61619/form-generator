import { CompConfigProps } from '../../types/schema';
import { CompProps } from './type';
import { CommonConfig } from '../common';

export const Config: CompConfigProps<CompProps> = ({ onUpdate, configValue }) => {
  return (
    <div>
      <CommonConfig configValue={configValue} onUpdate={onUpdate} />
    </div>
  );
};
