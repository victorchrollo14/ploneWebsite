import { SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import ReleaseData from './Data';

const Edit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <SidebarPortal selected={selected}>
        <ReleaseData
          key={block}
          {...props}
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(Edit);
