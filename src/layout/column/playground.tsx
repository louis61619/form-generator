import Column from '../../playground/column';
import { PlaygroundProps } from '../../types';

export const Playground = ({ uuid }: PlaygroundProps) => {
  return (
    <div>
      <div>{uuid}</div>
      <Column id={uuid} />
    </div>
  );
};
