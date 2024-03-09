import { Schema } from '../types';
import { usePlaygroundContext } from './context';
import { Block } from './block';

type Props = {
  schema: Schema;
};

export const RenderSchema = ({ schema }: Props) => {
  const { compsMap } = usePlaygroundContext();

  return (
    <>
      {schema.order?.length
        ? schema.order.map((uuid, index) => {
            console.log(schema.properties, uuid, '000');
            const type = schema.properties?.[uuid].type;
            if (!type) return null;
            const compInfo = compsMap[type];
            const Comp = compInfo.playground;
            return (
              <Block uuid={uuid} index={index}>
                <Comp uuid={uuid} />
              </Block>
            );
          })
        : null}
    </>
  );
};
