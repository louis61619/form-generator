import { Schema } from '../types/schema';
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
            // console.log(schema.properties, uuid, '000');
            const content = schema.properties?.[uuid];
            if (!content) return null;
            const type = content.type;
            if (!type) return null;
            const compInfo = compsMap[type];
            const Comp = compInfo.playground;
            return (
              <Block uuid={uuid} index={index} key={uuid}>
                <Comp uuid={uuid} configValue={content.configValue || {}} />
              </Block>
            );
          })
        : null}
    </>
  );
};
